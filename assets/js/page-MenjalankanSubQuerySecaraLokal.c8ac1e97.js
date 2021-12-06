(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{653:function(a,e,n){"use strict";n.r(e);var s=n(1),t=Object(s.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"menjalankan-subquery-secara-lokal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menjalankan-subquery-secara-lokal"}},[a._v("#")]),a._v(" Menjalankan SubQuery Secara Lokal")]),a._v(" "),n("p",[a._v("Panduan ini bekerja melalui cara menjalankan node SubQuery lokal pada infrastruktur Anda, yang mencakup pengindeks dan layanan kueri. Tidak ingin khawatir saat menjalankan infrastruktur SubQuery Anda sendiri? SubQuery menyediakan "),n("a",{attrs:{href:"https://explorer.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[a._v("layanan hosting yang terkelola"),n("OutboundLink")],1),a._v(" kepada komunitas secara gratis. "),n("RouterLink",{attrs:{to:"/id/publish/publish.html"}},[a._v("Ikuti panduan penerbitan kami")]),a._v(" untuk melihat bagaimana Anda dapat mengunggah proyek Anda ke "),n("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[a._v("Proyek SubQuery"),n("OutboundLink")],1),a._v(".")],1),a._v(" "),n("h2",{attrs:{id:"gunakan-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gunakan-docker"}},[a._v("#")]),a._v(" Gunakan Docker")]),a._v(" "),n("p",[a._v("Solusi alternatif adalah menjalankan "),n("strong",[a._v("Docker Container")]),a._v(", yang ditentukan oleh file "),n("code",[a._v("docker-compose.yml")]),a._v(". Untuk proyek baru yang baru saja diinisialisasi, Anda tidak perlu mengubah apa pun di sini.")]),a._v(" "),n("p",[a._v("Di bawah direktori proyek jalankan perintah berikut:")]),a._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("docker-compose pull "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" docker-compose up\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("Mungkin perlu beberapa saat untuk mengunduh paket yang diperlukan ("),n("a",{attrs:{href:"https://www.npmjs.com/package/@subql/node",target:"_blank",rel:"noopener noreferrer"}},[n("code",[a._v("@subql/node")]),n("OutboundLink")],1),a._v(", "),n("a",{attrs:{href:"https://www.npmjs.com/package/@subql/query",target:"_blank",rel:"noopener noreferrer"}},[n("code",[a._v("@subql/query")]),n("OutboundLink")],1),a._v(", dan Postgres) untuk pertama kalinya, tetapi segera Anda akan melihat Node subkueri.")]),a._v(" "),n("h2",{attrs:{id:"menjalankan-pengindeks-subql-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menjalankan-pengindeks-subql-node"}},[a._v("#")]),a._v(" Menjalankan Pengindeks (subql/node)")]),a._v(" "),n("p",[a._v("Persyaratan:")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Postgres"),n("OutboundLink")],1),a._v(" database (versi 12 atau lebih tinggi). Ketika "),n("a",{attrs:{href:"#start-a-local-subquery-node"}},[a._v("Node SubQuery")]),a._v(" mengindeks blockchain, data yang diekstrak akan disimpan dalam instance database eksternal.")])]),a._v(" "),n("p",[a._v("Node SubQuery adalah implementasi yang mengekstrak data blockchain berbasis substrat per proyek SubQuery dan menyimpannya ke dalam database Postgres.")]),a._v(" "),n("h3",{attrs:{id:"instalasi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instalasi"}},[a._v("#")]),a._v(" Instalasi")]),a._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# NPM")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g @subql/node\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("Harap diperhatikan bahwa kami "),n("strong",[a._v("TIDAK")]),a._v(" mendukung penggunaan "),n("code",[a._v("yarn global")]),a._v(" karena manajemen ketergantungannya yang buruk yang dapat menyebabkan error di masa mendatang.")]),a._v(" "),n("p",[a._v("Setelah terinstal, Anda dapat memulai node dengan perintah berikut:")]),a._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("subql-node "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("command"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"perintah-utama"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#perintah-utama"}},[a._v("#")]),a._v(" Perintah Utama")]),a._v(" "),n("p",[a._v("Perintah berikut akan membantu Anda menyelesaikan konfigurasi node SubQuery dan memulai proses pengindeksan. Untuk mengetahui lebih lanjut, Anda dapat menjalankan perintah "),n("code",[a._v("--help")]),a._v(".")]),a._v(" "),n("h4",{attrs:{id:"arahkan-ke-jalur-proyek-lokal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arahkan-ke-jalur-proyek-lokal"}},[a._v("#")]),a._v(" Arahkan ke jalur proyek lokal")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("subql-node -f your-project-path\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h4",{attrs:{id:"gunakan-kamus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gunakan-kamus"}},[a._v("#")]),a._v(" Gunakan Kamus")]),a._v(" "),n("p",[a._v("Menggunakan kamus full chain dapat mempercepat pemrosesan proyek SubQuery selama pengujian atau selama indeks pertama Anda secara drastis. Dalam beberapa kasus, kami telah melihat peningkatan kinerja pengindeksan hingga 10x dibanding sebelumnya.")]),a._v(" "),n("p",[a._v("Kamus full chain dapat melakukan pra-indeks lokasi semua peristiwa dan ekstrinsik dalam chain tertentu dan memungkinkan layanan node Anda untuk melompat ke lokasi yang relevan saat melakukan proses indeks daripada memeriksa setiap blok.")]),a._v(" "),n("p",[a._v("Anda dapat menambahkan titik akhir kamus di file "),n("code",[a._v("project.yaml")]),a._v(" Anda (lihat "),n("RouterLink",{attrs:{to:"/id/create/manifest.html"}},[a._v("File Manifes")]),a._v("), atau tentukan saat dijalankan menggunakan perintah berikut:")],1),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("subql-node --network-dictionary=https://api.subquery.network/sq/subquery/dictionary-polkadot\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h4",{attrs:{id:"hubungkan-ke-database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hubungkan-ke-database"}},[a._v("#")]),a._v(" Hubungkan ke database")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("export DB_USER=postgres\nexport DB_PASS=postgres\nexport DB_DATABASE=postgres\nexport DB_HOST=localhost\nexport DB_PORT=5432\nsubql-node -f your-project-path\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("Bergantung pada konfigurasi database Postgres Anda (misalnya kata sandi database yang berbeda), harap pastikan juga bahwa pengindeks ("),n("code",[a._v("subql/node")]),a._v(") dan layanan kueri ("),n("code",[a._v("subql/query")]),a._v(") dapat membuat koneksi ke sana.")]),a._v(" "),n("h4",{attrs:{id:"tentukan-file-konfigurasi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tentukan-file-konfigurasi"}},[a._v("#")]),a._v(" Tentukan file konfigurasi")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("subql-node -c your-project-config.yml\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("Ini akan mengarahkan node kueri ke file konfigurasi yang bisa dalam format YAML atau JSON. Lihat contoh di bawah ini.")]),a._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("subquery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ../../../../subql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("example/extrinsics\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("subqueryName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" extrinsics\nbatchSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\nlocalMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("h4",{attrs:{id:"ubah-ukuran-batch-pengambilan-blok"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubah-ukuran-batch-pengambilan-blok"}},[a._v("#")]),a._v(" Ubah ukuran batch pengambilan blok")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("subql-node -f your-project-path --batch-size 200\n\nResult:\n[IndexerManager] fetch block [203, 402]\n[IndexerManager] fetch block [403, 602]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("Saat pengindeks pertama kali mengindeks chain, mengambil blok tunggal akan menurunkan kinerja secara signifikan. Meningkatkan ukuran batch untuk menyesuaikan jumlah blok yang diambil akan mengurangi waktu pemrosesan secara keseluruhan. Ukuran batch default saat ini adalah 100.")]),a._v(" "),n("h4",{attrs:{id:"mode-lokal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mode-lokal"}},[a._v("#")]),a._v(" Mode lokal")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("subql-node -f your-project-path --local\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("Untuk tujuan debugging, pengguna dapat menjalankan node dalam mode lokal. Beralih ke model lokal akan membuat tabel Postgres dalam skema "),n("code",[a._v("publik")]),a._v(" default.")]),a._v(" "),n("p",[a._v("Jika mode lokal tidak digunakan, skema Postgres baru dengan "),n("code",[a._v("subquery_")]),a._v(" awal dan tabel proyek yang sesuai akan dibuat.")]),a._v(" "),n("h2",{attrs:{id:"menjalankan-layanan-kueri-subql-query"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menjalankan-layanan-kueri-subql-query"}},[a._v("#")]),a._v(" Menjalankan Layanan Kueri (subql/query)")]),a._v(" "),n("h3",{attrs:{id:"instalasi-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instalasi-2"}},[a._v("#")]),a._v(" Instalasi")]),a._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# NPM")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g @subql/query\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("Harap perhatikan bahwa kami "),n("strong",[a._v("TIDAK")]),a._v(" mendukung penggunaan "),n("code",[a._v("yarn global")]),a._v(" karena manajemen ketergantungannya yang buruk yang dapat menyebabkan error di masa mendatang.")]),a._v(" "),n("h3",{attrs:{id:"menjalankan-layanan-kueri"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menjalankan-layanan-kueri"}},[a._v("#")]),a._v(" Menjalankan layanan Kueri")]),a._v(" "),n("p",[a._v("``` export DB_HOST=localhost subql-query --name <project_name> --playground ````")]),a._v(" "),n("p",[a._v("Pastikan nama proyek sama dengan nama proyek saat Anda "),n("RouterLink",{attrs:{to:"/id/quickstart/quickstart.html#initialise-the-starter-subquery-project"}},[a._v("menginisialisasi proyek")]),a._v(". Periksa juga variabel lingkungan sudah benar.")],1),a._v(" "),n("p",[a._v("Setelah menjalankan layanan subql-query dengan sukses, buka browser Anda dan buka "),n("code",[a._v("http://localhost:3000")]),a._v(". Anda akan melihat playground GraphQL muncul di Explorer dan skema yang siap untuk kueri.")])])}),[],!1,null,null,null);e.default=t.exports}}]);