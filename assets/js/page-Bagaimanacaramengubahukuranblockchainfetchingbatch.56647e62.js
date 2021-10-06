(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{571:function(a,n,s){"use strict";s.r(n);var e=s(1),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bagaimana-cara-mengubah-ukuran-blockchain-fetching-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bagaimana-cara-mengubah-ukuran-blockchain-fetching-batch"}},[a._v("#")]),a._v(" Bagaimana cara mengubah ukuran blockchain fetching batch?")]),a._v(" "),s("h2",{attrs:{id:"panduan-video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#panduan-video"}},[a._v("#")]),a._v(" Panduan video")]),a._v(" "),s("figure",{staticClass:"video_container"},[s("iframe",{attrs:{src:"https://www.youtube.com/embed/LO_Gea_IN_s",frameborder:"0",allowfullscreen:"true"}})]),a._v(" "),s("h2",{attrs:{id:"pengenalan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pengenalan"}},[a._v("#")]),a._v(" Pengenalan")]),a._v(" "),s("p",[a._v("Ukuran batch default adalah 100, tapi ini bisa diubah menggunakan perintah ekstra "),s("code",[a._v("--batch-size=xx")]),a._v(".")]),a._v(" "),s("p",[a._v("Anda perlu memasukkannya ke garis perintah sebagai extra flag atau jika menggunakan Docker, modifikasi file docker-compose.yml dengan:")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("subquery-node:\n    image: onfinality/subql-node:latest\n    depends_on:\n      - "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"postgres"')]),a._v("\n    restart: always\n    environment:\n      DB_USER: postgres\n      DB_PASS: postgres\n      DB_DATABASE: postgres\n      DB_HOST: postgres\n      DB_PORT: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5432")]),a._v("\n    volumes:\n      - ./:/app\n    command:\n      - -f"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/app\n      - --local\n      - --batch-size"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("p",[a._v("Contoh ini mengatur ukuran batch (batch size) ke 50.")]),a._v(" "),s("h2",{attrs:{id:"kenapa-mengubah-ukuran-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kenapa-mengubah-ukuran-batch"}},[a._v("#")]),a._v(" Kenapa mengubah ukuran batch?")]),a._v(" "),s("p",[a._v("Menggunakan ukuran batch yang lebih kecil bisa mengurangi penggunaan memori dan tidak membuat pengguna menunggu untuk query yang besar. Dengan kata lain, aplikasi anda bisa jadi lebih responsif.")])])}),[],!1,null,null,null);n.default=t.exports}}]);