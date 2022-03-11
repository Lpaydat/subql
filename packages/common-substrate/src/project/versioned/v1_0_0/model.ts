// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {runnerSpecs} from '@subql/common';
import {plainToClass} from 'class-transformer';
import {Equals, IsString, validateSync} from 'class-validator';
import {DeploymentV0_2_1, ProjectManifestV0_2_1Impl} from '../v0_2_1';
import {SubstrateProjectManifestV1_0_0} from './types';

export class DeploymentV1_0_0 extends DeploymentV0_2_1 {
  @Equals('1.0.0')
  @IsString()
  specVersion: string;
  runner: runnerSpecs;
}

export class ProjectManifestV1_0_0Impl extends ProjectManifestV0_2_1Impl implements SubstrateProjectManifestV1_0_0 {
  runner: runnerSpecs;
  protected _deployment: DeploymentV1_0_0;

  get deployment(): DeploymentV1_0_0 {
    if (!this._deployment) {
      this._deployment = plainToClass(DeploymentV1_0_0, this);
      validateSync(this._deployment, {whitelist: true});
    }
    return this._deployment;
  }
}
