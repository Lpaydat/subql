// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {performance} from 'perf_hooks';
import {ApolloServerPlugin} from 'apollo-server-plugin-base';
import {GraphQLRequestListener} from 'apollo-server-plugin-base/src/index';
import {GraphQLRequestContext} from 'apollo-server-types';
import gql from 'graphql-tag';
import {Pool} from 'pg';
import {getLogger} from '../../utils/logger';

interface ServerContext {
  pgClient: Pool;
  httpHeaders: Record<string, string>;
}

const logger = getLogger('graphql');

const getSizeInKilobytes = (obj: Record<string, unknown>) => {
  const str = JSON.stringify(obj);
  const sizeInBytes = new TextEncoder().encode(str).length;
  return (sizeInBytes / 1000).toFixed(2);
};

/* eslint-disable @typescript-eslint/require-await */
export const LogGraphqlPlugin: ApolloServerPlugin = {
  async requestDidStart<MyApolloContext>(
    requestContext: GraphQLRequestContext<ServerContext>
  ): Promise<GraphQLRequestListener<MyApolloContext>> {
    const graphqlData = {} as Record<string, unknown>;
    const payload = {} as Record<string, unknown>;
    const start = performance.now();

    //IntrospectionQuery payload clutters logs and isn't useful
    if (requestContext.request.operationName === 'IntrospectionQuery') {
      return;
    }

    payload.message = JSON.stringify(
      gql`
        ${requestContext.request.query}
      `
    );

    const httpHeaders = requestContext.context.httpHeaders;

    if (httpHeaders) {
      payload['x-forwarded-for'] = httpHeaders['x-forwarded-for'] ?? '127.0.0.1';
      payload['user-agent'] = httpHeaders['user-agent'] ?? 'unknown';
      payload.referer = httpHeaders.referer ?? 'unknown';
    }

    return {
      async willSendResponse({response}) {
        payload['response-time'] = `${Math.round(performance.now() - start)}`;
        payload['response-payload-size'] = getSizeInKilobytes(response.data);

        if (!response.errors) {
          payload['query-success'] = 'true';
        } else {
          payload['query-success'] = 'false';
        }

        graphqlData.payload = payload;
        logger.info(JSON.stringify(graphqlData));
      },
      async didEncounterErrors(requestContext) {
        const errors = requestContext.errors;
        graphqlData.errors = errors;
      },
    };
  },
};
