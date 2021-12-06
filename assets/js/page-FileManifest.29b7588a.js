(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{634:function(a,t,e){"use strict";e.r(t);var n=e(1),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"file-manifest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-manifest"}},[a._v("#")]),a._v(" File Manifest")]),a._v(" "),e("p",[a._v("File Manifest "),e("code",[a._v("project.yaml")]),a._v(" bisa dilihat sebagai titik masuk proyek Anda dan menentukan sebagian besar detil tentang bagaimana SubQuery akan mengindeks dan mengubah data chain.")]),a._v(" "),e("p",[a._v("Manifest bisa dalam format YAML atau JSON. Dalam dokumen ini, kita akan menggunakan YAML di semua contoh. Di bawah ini merupakan contoh standar "),e("code",[a._v("project.yaml")]),a._v(" standar.")]),a._v(" "),e("CodeGroup",[e("CodeGroupItem",{attrs:{title:"v0.2.0",active:""}},[a._v(" ``` yml spesifikasiVersi: 0.2.0 nama: contoh-proyek # Berikan nama proyek versi: 1.0.0 # Versi proyek deskripsi: '' # Deskripsi proyek Anda repositori: 'https://github.com/subquery/subql-starter' # Alamat repositori Git proyek Anda skema: file: ./schema.graphql # Lokasi file skema GraphQL Anda jaringan: genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3' # Genesis hash jaringan titik akhir: 'wss://polkadot.api.onfinality.io/public-ws' # Secara opsional, berikan titik akhir HTTP dari kamus rantai lengkap untuk mempercepat pemrosesan kamus: 'https://api.subquery.network/sq/subquery/dictionary-polkadot' sumber data: - jenis: substrat/Waktu Proses startBlock: 1 # Ini mengubah blok awal pengindeksan Anda, setel ini lebih tinggi untuk melewati blok awal dengan lebih sedikit data peta: file: \"./dist/index.js\" penangan: - handler: handleBlock jenis: substrat/BlockHandler - handler: handleEvent jenis: substrat/EventHandler filter: #Filter adalah opsional modul: saldo metode: Setoran - handler: handleCall jenis: substrat/CallHandler ```` </0/1>\n"),e("CodeGroupItem",{attrs:{title:"v0.0.1"}},[a._v(" ``` yml spesifikasiVersi: \"0.0.1\" deskripsi: '' # Deskripsi proyek Anda repositori: 'https://github.com/subquery/subql-starter' # Alamat repositori Git proyek Anda schema: ./schema.graphql # Lokasi file skema GraphQL Anda jaringan: titik akhir: 'wss://polkadot.api.onfinality.io/public-ws' # Secara opsional, berikan titik akhir HTTP dari kamus rantai lengkap untuk mempercepat pemrosesan kamus: 'https://api.subquery.network/sq/subquery/dictionary-polkadot' sumber data: - nama: utama jenis: substrat/Waktu Proses startBlock: 1 # Ini mengubah blok awal pengindeksan Anda, setel ini lebih tinggi untuk melewati blok awal dengan lebih sedikit data peta: penangan: - handler: handleBlock jenis: substrat/BlockHandler - handler: handleEvent jenis: substrat/EventHandler filter: #Filter bersifat opsional tetapi disarankan untuk mempercepat pemrosesan acara modul: saldo metode: Setoran - handler: handleCall jenis: substrat/CallHandler ```` ")])],1)],1),a._v(" "),e("h2",{attrs:{id:"migrasi-dari-v0-0-1-ke-v0-2-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrasi-dari-v0-0-1-ke-v0-2-0"}},[a._v("#")]),a._v(" Migrasi dari v0.0.1 ke v0.2.0 "),e("Badge",{attrs:{text:"upgrade",type:"warning"}})],1),a._v(" "),e("p",[e("strong",[a._v("Jika Anda memiliki proyek dengan specVersion v0.0.1, Anda dapat menggunakan "),e("code",[a._v("subql migration")]),a._v(" untuk meningkatkan versi dengan cepat. "),e("a",{attrs:{href:"#cli-options"}},[a._v("Lihat di sini")]),a._v(" untuk informasi lebih lanjut")])]),a._v(" "),e("p",[a._v("Di bawah "),e("code",[a._v("jaringan")]),a._v(":")]),a._v(" "),e("ul",[e("li",[a._v("Ada bidang "),e("strong",[a._v("wajib")]),a._v(" "),e("code",[a._v("genesisHash")]),a._v(" baru yang membantu mengidentifikasi rantai yang digunakan.")]),a._v(" "),e("li",[a._v("Untuk v0.2.0 dan yang lebih baru, Anda dapat mereferensikan "),e("a",{attrs:{href:"#custom-chains"}},[a._v("file jenis rantai")]),a._v(" eksternal jika Anda mereferensikan rantai khusus.")])]),a._v(" "),e("p",[a._v("Dibawah "),e("code",[a._v("dataSources")]),a._v(":")]),a._v(" "),e("ul",[e("li",[a._v("Dapat langsung menautkan titik masuk "),e("code",[a._v("index.js")]),a._v(" untuk pengendali pemetaan. Secara default "),e("code",[a._v("index.js")]),a._v(" ini akan dihasilkan dari "),e("code",[a._v("index.ts")]),a._v(" selama proses pembuatan.")]),a._v(" "),e("li",[a._v("Sumber data sekarang dapat berupa sumber data waktu proses reguler atau "),e("a",{attrs:{href:"#custom-data-sources"}},[a._v("sumber data khusus")]),a._v(".")])]),a._v(" "),e("h3",{attrs:{id:"cli-pilihan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli-pilihan"}},[a._v("#")]),a._v(" CLI Pilihan")]),a._v(" "),e("p",[a._v("Meskipun versi spesifikasi v0.2.0 masih dalam versi beta, Anda perlu mendefinisikannya secara eksplisit selama inisialisasi proyek dengan menjalankan "),e("code",[a._v("subql init --specVersion 0.2.0 PROJECT_NAME")])]),a._v(" "),e("p",[e("code",[a._v("migrasi subql")]),a._v(" dapat dijalankan di proyek yang ada untuk memigrasikan manifes proyek ke versi terbaru.")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Pilihan")]),a._v(" "),e("th",[a._v("Deskripsi")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("-f, --force")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("-l, --location")]),a._v(" "),e("td",[a._v("folder lokal untuk menjalankan migrasi (harus berisi project.yaml)")])]),a._v(" "),e("tr",[e("td",[a._v("--file=file")]),a._v(" "),e("td",[a._v("untuk menentukan project.yaml yang akan dimigrasi")])])])]),a._v(" "),e("h2",{attrs:{id:"gambaran"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gambaran"}},[a._v("#")]),a._v(" Gambaran")]),a._v(" "),e("h3",{attrs:{id:"spesifikasi-tingkat-atas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spesifikasi-tingkat-atas"}},[a._v("#")]),a._v(" Spesifikasi Tingkat Atas")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Bidang")]),a._v(" "),e("th",[a._v("v0.0.1")]),a._v(" "),e("th",[a._v("v0.2.0")]),a._v(" "),e("th",[a._v("Deskripsi")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("specVersion")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[e("code",[a._v("0.0.1")]),a._v(" or "),e("code",[a._v("0.2.0")]),a._v(" - versi spesifikasi file manifes")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("name")])]),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Nama proyek Anda")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("version")])]),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Versi Proyek anda")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("description")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Deskripsi Proyek anda")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("repository")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Git alamat repositori proyek Anda")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("schema")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[e("a",{attrs:{href:"#schema-spec"}},[a._v("Schema Spec")])]),a._v(" "),e("td",[a._v("Lokasi file skema GraphQL Anda")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("network")])]),a._v(" "),e("td",[e("a",{attrs:{href:"#network-spec"}},[a._v("Network Spec")])]),a._v(" "),e("td",[a._v("Network Spec")]),a._v(" "),e("td",[a._v("Detail jaringan yang akan diindeks")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("dataSources")])]),a._v(" "),e("td",[e("a",{attrs:{href:"#datasource-spec"}},[a._v("DataSource Spec")])]),a._v(" "),e("td",[a._v("DataSource Spec")]),a._v(" "),e("td")])])]),a._v(" "),e("h3",{attrs:{id:"spesifikasi-skema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spesifikasi-skema"}},[a._v("#")]),a._v(" Spesifikasi Skema")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Bidang")]),a._v(" "),e("th",[a._v("v0.0.1")]),a._v(" "),e("th",[a._v("v0.2.0")]),a._v(" "),e("th",[a._v("Deskripsi")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("file")])]),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Lokasi file skema GraphQL Anda")])])])]),a._v(" "),e("h3",{attrs:{id:"network-spec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-spec"}},[a._v("#")]),a._v(" Network Spec")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Bidang")]),a._v(" "),e("th",[a._v("v0.0.1")]),a._v(" "),e("th",[a._v("v0.2.0")]),a._v(" "),e("th",[a._v("Deskripsi")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("genesisHash")])]),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Hash asal jaringan")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("endpoint")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Menentukan titik akhir wss atau ws dari blockchain yang akan diindeks - "),e("strong",[a._v("Ini harus berupa node arsip lengkap")]),a._v(". Anda dapat mengambil titik akhir untuk semua parachains secara gratis dari "),e("a",{attrs:{href:"https://app.onfinality.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("OnFinality"),e("OutboundLink")],1)])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("dictionary")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("Disarankan untuk menyediakan titik akhir HTTP dari kamus rantai lengkap untuk mempercepat pemrosesan - baca "),e("RouterLink",{attrs:{to:"/id/tutorials_examples/dictionary.html"}},[a._v("cara kerja Kamus Subkueri")]),a._v(".")],1)]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("chaintypes")])]),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("{file:String}")]),a._v(" "),e("td",[a._v("File jenis jalur ke rantai, terima format "),e("code",[a._v(".json")]),a._v(" atau "),e("code",[a._v(".yaml")])])])])]),a._v(" "),e("h3",{attrs:{id:"datasource-spec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datasource-spec"}},[a._v("#")]),a._v(" Datasource Spec")]),a._v(" "),e("p",[a._v("Mendefinisikan data yang akan disaring dan diekstraksi dan lokasi pengendali fungsi pemetaan untuk transformasi data yang akan diterapkan.")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Field")]),a._v(" "),e("th",[a._v("v0.0.1")]),a._v(" "),e("th",[a._v("v0.2.0")]),a._v(" "),e("th",[a._v("Deskripsi")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("name")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("Nama sumber data")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("jenis")])]),a._v(" "),e("td",[e("RouterLink",{attrs:{to:"/id/create/manifest/#data-sources-and-mapping"}},[a._v("substrate/Runtime")])],1),a._v(" "),e("td",[a._v("substrate/Runtime, "),e("RouterLink",{attrs:{to:"/id/create/manifest/#custom-data-sources"}},[a._v("substrate/CustomDataSource")])],1),a._v(" "),e("td",[a._v("Kami mendukung tipe data dari runtime substrat default seperti blok, peristiwa dan ekstrinsik (panggilan). "),e("br"),a._v(" Dari v0.2.0, kami mendukung data dari runtime khusus, seperti kontrak pintar.")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("startBlock")])]),a._v(" "),e("td",[a._v("Integer")]),a._v(" "),e("td",[a._v("Integer")]),a._v(" "),e("td",[a._v("Ini mengubah blok awal pengindeksan Anda, setel ini lebih tinggi untuk melewati blok awal dengan lebih sedikit data")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("mapping")])]),a._v(" "),e("td",[a._v("Mapping Spec")]),a._v(" "),e("td",[a._v("Mapping Spec")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("filter")])]),a._v(" "),e("td",[e("RouterLink",{attrs:{to:"/id/create/manifest/#network-filters"}},[a._v("network-filters")])],1),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("Filter sumber data untuk dieksekusi dengan nama spesifikasi titik akhir jaringan")])])])]),a._v(" "),e("h3",{attrs:{id:"mapping-spec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapping-spec"}},[a._v("#")]),a._v(" Mapping Spec")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Field")]),a._v(" "),e("th",[a._v("v0.0.1")]),a._v(" "),e("th",[a._v("v0.2.0")]),a._v(" "),e("th",[a._v("Deskripsi")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("file")])]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("𐄂")]),a._v(" "),e("td",[a._v("Jalur ke entri pemetaan")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("handlers & filters")])]),a._v(" "),e("td",[e("RouterLink",{attrs:{to:"/id/create/manifest/#mapping-handlers-and-filters"}},[a._v("Penangan dan filter default")])],1),a._v(" "),e("td",[a._v("Penangan dan filter default, "),e("br"),e("a",{attrs:{href:"#custom-data-sources"}},[a._v("Penangan dan filter khusus")])]),a._v(" "),e("td",[a._v("Buat daftar semua "),e("RouterLink",{attrs:{to:"/id/create/mapping.html"}},[a._v("fungsi pemetaan")]),a._v(" dan jenis pengendali yang sesuai, dengan filter pemetaan tambahan. </>"),e("br"),a._v(" Untuk pengendali pemetaan runtime kustom, lihat "),e("a",{attrs:{href:"#custom-data-sources"}},[a._v("Sumber data kustom")])],1)])])]),a._v(" "),e("h2",{attrs:{id:"sumber-data-dan-pemetaan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sumber-data-dan-pemetaan"}},[a._v("#")]),a._v(" Sumber Data dan Pemetaan")]),a._v(" "),e("p",[a._v("Di bagian ini, kita akan berbicara tentang runtime substrat default dan pemetaannya. Berikut ini contohnya:")]),a._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sumber data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("jenis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/Waktu Proses "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Menunjukkan bahwa ini adalah waktu proses default")]),a._v("\n     "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("startBlock")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Ini mengubah blok awal pengindeksan Anda, setel ini lebih tinggi untuk melewati blok awal dengan lebih sedikit data")]),a._v("\n     "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("pemetaan")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n       "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dist/index.js "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Jalur masuk untuk pemetaan ini")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"penangan-pemetaan-dan-filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#penangan-pemetaan-dan-filter"}},[a._v("#")]),a._v(" Penangan pemetaan dan Filter")]),a._v(" "),e("p",[a._v("Tabel berikut menjelaskan filter yang didukung oleh penangan yang berbeda.")]),a._v(" "),e("p",[e("strong",[a._v("Proyek SubQuery Anda akan jauh lebih efisien jika Anda hanya menggunakan event dan call handler dengan filter pemetaan yang sesuai")])]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Handler")]),a._v(" "),e("th",[a._v("Filter yang didukung")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/id/create/mapping.html#block-handler"}},[a._v("BlockHandler")])],1),a._v(" "),e("td",[e("code",[a._v("specVersion")])])]),a._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/id/create/mapping.html#event-handler"}},[a._v("EventHandler")])],1),a._v(" "),e("td",[e("code",[a._v("module")]),a._v(","),e("code",[a._v("method")])])]),a._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/id/create/mapping.html#call-handler"}},[a._v("CallHandler")])],1),a._v(" "),e("td",[e("code",[a._v("module")]),a._v(","),e("code",[a._v("method")]),a._v(" ,"),e("code",[a._v("success")])])])])]),a._v(" "),e("p",[a._v("Filter pemetaan runtime default adalah fitur yang sangat berguna untuk memutuskan blok, peristiwa, atau ekstrinsik apa yang akan memicu pengendali pemetaan.")]),a._v(" "),e("p",[a._v("Hanya data masuk yang memenuhi kondisi filter yang akan diproses oleh fungsi pemetaan. Filter pemetaan bersifat opsional tetapi sangat disarankan karena secara signifikan mengurangi jumlah data yang diproses oleh proyek SubQuery Anda dan akan meningkatkan kinerja pengindeksan.")]),a._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Contoh filter dari callHandler")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Saring")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("modul")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" saldo\n   "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Setoran\n   "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sukses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" benar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("ul",[e("li",[a._v("Filter modul dan metode didukung pada rantai berbasis media apa pun.")]),a._v(" "),e("li",[a._v("Filter "),e("code",[a._v("sukses")]),a._v(" mengambil nilai boolean dan dapat digunakan untuk memfilter ekstrinsik berdasarkan status keberhasilannya.")]),a._v(" "),e("li",[a._v("Filter "),e("code",[a._v("specVersion")]),a._v(" menentukan rentang versi spesifikasi untuk blok media. Contoh berikut menjelaskan cara menyetel rentang versi.")])]),a._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Blok indeks dengan specVersion di antara 23 dan 24 (inklusif).")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Blok indeks dengan specVersion lebih besar dari atau sama dengan 100.")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token null important"}},[a._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Blok indeks dengan specVersion kurang dari atau sama dengan 23.")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h2",{attrs:{id:"chain-kustom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chain-kustom"}},[a._v("#")]),a._v(" Chain Kustom")]),a._v(" "),e("h3",{attrs:{id:"network-spec-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-spec-2"}},[a._v("#")]),a._v(" Network Spec")]),a._v(" "),e("p",[a._v("Saat menghubungkan ke parachain Polkadot yang berbeda atau bahkan rantai substrat khusus, Anda harus mengedit bagian "),e("a",{attrs:{href:"#network-spec"}},[a._v("Spesifikasi Jaringan")]),a._v(" dari manifes ini.")]),a._v(" "),e("p",[e("code",[a._v("genesisHash")]),a._v(" harus selalu berupa hash dari blok pertama jaringan kustom. Anda dapat mengambil ini dengan mudah dengan pergi ke "),e("a",{attrs:{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.api.onfinality.io%2Fpublic-ws#/explorer/query/0",target:"_blank",rel:"noopener noreferrer"}},[a._v("Polkadot JS"),e("OutboundLink")],1),a._v(" dan mencari hash di "),e("strong",[a._v("blok 0")]),a._v(" (lihat gambar di bawah).")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/genesis-hash.jpg",alt:"Kejadian Hash"}})]),a._v(" "),e("p",[a._v("Selain itu, Anda perlu memperbarui "),e("code",[a._v("endpoint")]),a._v(". Ini mendefinisikan endpoint wss dari blockchain yang akan diindeks - "),e("strong",[a._v("Ini harus berupa node arsip lengkap")]),a._v(". Anda dapat mengambil titik akhir untuk semua parachains secara gratis dari "),e("a",{attrs:{href:"https://app.onfinality.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("OnFinality"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"tipe-chain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tipe-chain"}},[a._v("#")]),a._v(" Tipe Chain")]),a._v(" "),e("p",[a._v("Anda dapat mengindeks data dari rantai kustom dengan juga menyertakan jenis rantai dalam manifes.")]),a._v(" "),e("p",[a._v("Kami mendukung jenis tambahan yang digunakan oleh modul waktu proses media, "),e("code",[a._v("typesAlias")]),a._v(", "),e("code",[a._v("typesBundle")]),a._v(", "),e("code",[a._v("typesChain")]),a._v(", dan "),e("code",[a._v("typesSpec")]),a._v(" juga didukung")]),a._v(" "),e("p",[a._v("Dalam contoh v0.2.0 di bawah ini, "),e("code",[a._v("network.chaintypes")]),a._v(" menunjuk ke file yang memiliki semua tipe kustom yang disertakan, Ini adalah file chainspec standar yang menyatakan tipe spesifik yang didukung oleh blockchain ini di < 0>.json"),a._v(" atau "),e("code",[a._v(".yaml")]),a._v(".")]),a._v(" "),e("CodeGroup",[e("CodeGroupItem",{attrs:{title:"v0.2.0",active:""}},[a._v(" ``` yml jaringan: genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3' titik akhir: 'ws://host.kittychain.io/public-ws' tipe rantai: file: ./types.json # Jalur file relatif ke tempat jenis kustom disimpan ... ``` ")]),a._v(" "),e("CodeGroupItem",{attrs:{title:"v0.0.1"}},[a._v(' ``` yml ... network: endpoint: "ws://host.kittychain.io/public-ws" types: { "KittyIndex": "u32", "Kitty": "[u8; 16]" } # typesChain: { chain: { Type5: \'example\' } } # typesSpec: { spec: { Type6: \'example\' } } dataSources: - name: runtime kind: substrate/Runtime startBlock: 1 filter:  #Optional specName: kitty-chain mapping: handlers: - handler: handleKittyBred kind: substrate/CallHandler filter: module: kitties method: breed success: true ``` ')])],1),a._v(" "),e("h2",{attrs:{id:"sumber-data-khusus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sumber-data-khusus"}},[a._v("#")]),a._v(" Sumber Data Khusus")]),a._v(" "),e("p",[a._v("Sumber Data Khusus menyediakan fungsionalitas khusus jaringan yang membuat penanganan data menjadi lebih mudah. Mereka bertindak sebagai middleware yang dapat memberikan pemfilteran ekstra dan transformasi data.")]),a._v(" "),e("p",[a._v("Contoh yang baik dari hal ini adalah dukungan EVM, memiliki prosesor sumber data khusus untuk EVM berarti Anda dapat memfilter pada tingkat EVM (misalnya menyaring metode kontrak atau log) dan data diubah menjadi struktur yang mirip dengan ekosistem Ethereum juga sebagai parameter penguraian dengan ABI.")]),a._v(" "),e("p",[a._v("Sumber Data Khusus dapat digunakan dengan sumber data normal.")]),a._v(" "),e("p",[a._v("Berikut adalah daftar sumber data khusus yang didukung:")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Baik")]),a._v(" "),e("th",[a._v("Penangan yang Didukung")]),a._v(" "),e("th",[a._v("Filter")]),a._v(" "),e("th",[a._v("Deskripsi")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/id/create/moonbeam/#data-source-example"}},[a._v("substrat/Moonbeam")])],1),a._v(" "),e("td",[e("RouterLink",{attrs:{to:"/id/create/moonbeam/#moonbeamevent"}},[a._v("substrat/MoonbeamEvent")]),a._v(", "),e("RouterLink",{attrs:{to:"/id/create/moonbeam/#moonbeamcall"}},[a._v("substrat/MoonbeamCall")])],1),a._v(" "),e("td",[a._v("Lihat filter di bawah setiap penangan")]),a._v(" "),e("td",[a._v("Memberikan interaksi yang mudah dengan transaksi dan peristiwa EVM di jaringan Moonbeams")])])])]),a._v(" "),e("h2",{attrs:{id:"filter-jaringan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-jaringan"}},[a._v("#")]),a._v(" Filter Jaringan")]),a._v(" "),e("p",[e("strong",[a._v("Filter jaringan hanya berlaku untuk spesifikasi manifes v0.0.1")]),a._v(".")]),a._v(" "),e("p",[a._v("Biasanya pengguna akan membuat SubQuery dan berharap dapat menggunakannya kembali untuk lingkungan testnet dan mainnet mereka (misalnya Polkadot dan Kusama). Di antara jaringan, berbagai opsi cenderung berbeda (misalnya blok awal indeks). Oleh karena itu, kami mengizinkan pengguna untuk menentukan detail yang berbeda untuk setiap sumber data yang berarti bahwa satu proyek SubQuery masih dapat digunakan di beberapa jaringan.")]),a._v(" "),e("p",[a._v("Pengguna dapat menambahkan "),e("code",[a._v("filter")]),a._v(" pada "),e("code",[a._v("dataSources")]),a._v(" untuk memutuskan sumber data mana yang akan dijalankan di setiap jaringan.")]),a._v(" "),e("p",[a._v("Di bawah ini adalah contoh yang menunjukkan sumber data yang berbeda untuk jaringan Polkadot dan Kusama.")]),a._v(" "),e("CodeGroup",[e("CodeGroupItem",{attrs:{title:"v0.0.1"}},[a._v(" ```yaml --- jaringan: titik akhir: 'wss://polkadot.api.onfinality.io/public-ws' #Buat template untuk menghindari redundansi definisi: pemetaan: &pemetaan saya penangan: - handler: handleBlock jenis: substrat/BlockHandler sumber data: - nama: polkadotRuntime jenis: substrat/Waktu Proses filter: #Opsional specName: polkadot mulaiBlok: 1000 pemetaan: *mymapping #gunakan template di sini - nama: kusamaRuntime jenis: substrat/Waktu Proses Saring: specName: kusama mulaiBlok: 12000 pemetaan: *mymapping # dapat digunakan kembali atau diubah ``` ")])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);