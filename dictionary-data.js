/**
 * DATABASE KOSAKATA KAMUS BAHASA MANDAR - INDONESIA
 * Inisiatif Pelestarian Bahasa & Budaya Mandar (Sulawesi Barat)
 * Dikelola oleh Boyang Digital untuk Seluruh Masyarakat Mandar (Gratis)
 */

const DICTIONARY_DATA = [
  // SAPAAN, KEKELUARGAAN & SOSIAL
  {
    mandar: "Kareba",
    fonetik: "ka-re-ba",
    pos: "Nomina",
    indonesia: "Kabar, warta, berita",
    contoh_mandar: "Apa kareba dioro di boyangmu?",
    contoh_indo: "Apa kabar di sana di rumahmu?",
    kategori: "sapaan"
  },
  {
    mandar: "Tarima kasi",
    fonetik: "ta-ri-ma ka-si",
    pos: "Ungkapan",
    indonesia: "Terima kasih",
    contoh_mandar: "Tarima kasi ma'lewa atas tulungmu.",
    contoh_indo: "Terima kasih banyak atas bantuanmu.",
    kategori: "sapaan"
  },
  {
    mandar: "Kurru Sumange",
    fonetik: "kur-ru su-ma-nge",
    pos: "Ungkapan",
    indonesia: "Puji syukur / ucapan selamat / ungkapan semangat dan doa berkah khas Mandar",
    contoh_mandar: "Kurru sumange' di allo marasa ite.",
    contoh_indo: "Puji syukur / selamat atas hari yang baik ini.",
    kategori: "sapaan"
  },
  {
    mandar: "Boyang",
    fonetik: "bo-yang",
    pos: "Nomina",
    indonesia: "Rumah (rumah panggung khas Mandar)",
    contoh_mandar: "Melaoi' mai di boyangku maande jepa.",
    contoh_indo: "Ayo datang ke rumahku makan jepa.",
    kategori: "kehidupan"
  },
  {
    mandar: "Amaq",
    fonetik: "a-ma'",
    pos: "Nomina",
    indonesia: "Ayah, bapak",
    contoh_mandar: "Ama' melao di tasi' massombal.",
    contoh_indo: "Ayah pergi ke laut berlayar.",
    kategori: "sapaan"
  },
  {
    mandar: "Indoq",
    fonetik: "in-do'",
    pos: "Nomina",
    indonesia: "Ibu, mama",
    contoh_mandar: "Indo' mannasu bau peapi di daporang.",
    contoh_indo: "Ibu memasak ikan bau peapi di dapur.",
    kategori: "sapaan"
  },
  {
    mandar: "Kakaq",
    fonetik: "ka-ka'",
    pos: "Nomina",
    indonesia: "Kakak, saudara yang lebih tua",
    contoh_mandar: "Kaka' mangaji di mesjid.",
    contoh_indo: "Kakak mengaji di masjid.",
    kategori: "sapaan"
  },
  {
    mandar: "Kandiq",
    fonetik: "kan-di'",
    pos: "Nomina",
    indonesia: "Adik, saudara yang lebih muda",
    contoh_mandar: "Kandi' tinro malondong di lego-lego.",
    contoh_indo: "Adik tidur pulas di beranda rumah.",
    kategori: "sapaan"
  },
  {
    mandar: "Sappo",
    fonetik: "sap-po",
    pos: "Nomina",
    indonesia: "Sepupu, sapaan akrab persaudaraan sesama orang Mandar",
    contoh_mandar: "Pura meapang sappo di Pambusuang?",
    contoh_indo: "Sudah berkunjung kemana sepupu di Pambusuang?",
    kategori: "sapaan"
  },
  {
    mandar: "Maraqdia",
    fonetik: "ma-raq-di-a",
    pos: "Nomina",
    indonesia: "Raja, pemimpin adat tertinggi dalam kebudayaan Mandar",
    contoh_mandar: "Maraqdia Balanipa maduqdung paqbanua.",
    contoh_indo: "Raja Balanipa mengayomi rakyatnya.",
    kategori: "sapaan"
  },
  {
    mandar: "Paqbanua",
    fonetik: "paq-ba-nu-a",
    pos: "Nomina",
    indonesia: "Masyarakat, warga negeri / penduduk kampung",
    contoh_mandar: "Sikola paqbanua masannang atinna.",
    contoh_indo: "Seluruh warga merasa senang hatinya.",
    kategori: "sapaan"
  },
  {
    mandar: "Iyaq",
    fonetik: "i-ya'",
    pos: "Pronomina",
    indonesia: "Saya, aku",
    contoh_mandar: "Iya' tau Mandar aslina.",
    contoh_indo: "Saya orang Mandar asli.",
    kategori: "sapaan"
  },
  {
    mandar: "Iqo",
    fonetik: "i-'o",
    pos: "Pronomina",
    indonesia: "Kamu, engkau",
    contoh_mandar: "Melo maqdi i'o melao di Majene?",
    contoh_indo: "Maukah kamu pergi ke Majene?",
    kategori: "sapaan"
  },
  {
    mandar: "Kitaq",
    fonetik: "ki-ta'",
    pos: "Pronomina",
    indonesia: "Anda, kita (bentuk sopan dan santun)",
    contoh_mandar: "Pole diumbari kita' puang?",
    contoh_indo: "Dari manakah Anda datang wahai tuan?",
    kategori: "sapaan"
  },
  {
    mandar: "Ia",
    fonetik: "i-a",
    pos: "Pronomina",
    indonesia: "Dia, ia",
    contoh_mandar: "Ia pura melao di Tinambung.",
    contoh_indo: "Dia sudah berangkat ke Tinambung.",
    kategori: "sapaan"
  },
  {
    mandar: "Kami",
    fonetik: "ka-mi",
    pos: "Pronomina",
    indonesia: "Kami (jamak mengecualikan lawan bicara)",
    contoh_mandar: "Kami monge' paqmai' mitai.",
    contoh_indo: "Kami merasa haru melihatnya.",
    kategori: "sapaan"
  },

  // MARITIM & SANDEQ (PELAYARAN MANDAR)
  {
    mandar: "Sandeq",
    fonetik: "san-deq",
    pos: "Nomina",
    indonesia: "Perahu layar bercadik tradisional khas Mandar (tercepat di Nusantara)",
    contoh_mandar: "Sandeq masigi' lalingna lari ditompa anging.",
    contoh_indo: "Perahu Sandeq sangat cepat lajunya didorong angin.",
    kategori: "maritim"
  },
  {
    mandar: "Sombal",
    fonetik: "som-bal",
    pos: "Nomina / Verba",
    indonesia: "Layar perahu / berlayar",
    contoh_mandar: "Rebba sombalna naongei anging bara'.",
    contoh_indo: "Terkembang layarnya diterpa angin barat.",
    kategori: "maritim"
  },
  {
    mandar: "Pallayarang",
    fonetik: "pal-la-ya-rang",
    pos: "Nomina",
    indonesia: "Pelaut, pelayar, nakhoda ulung Mandar",
    contoh_mandar: "Pallayarang Mandar tandi' mataku di tasi' lompo.",
    contoh_indo: "Pelaut Mandar tidak takut di lautan lepas.",
    kategori: "maritim"
  },
  {
    mandar: "Guling",
    fonetik: "gu-ling",
    pos: "Nomina",
    indonesia: "Kemudi perahu tradisional",
    contoh_mandar: "Pattoppo guling mapande metuyu lalan.",
    contoh_indo: "Juru kemudi lihai mengarahkan haluan jalan.",
    kategori: "maritim"
  },
  {
    mandar: "Pallatto",
    fonetik: "pal-lat-to",
    pos: "Nomina",
    indonesia: "Cadik perahu (penyeimbang dari bambu di sisi perahu Sandeq)",
    contoh_mandar: "Tappang pallattona sandeq napake awo matoto.",
    contoh_indo: "Kuat penyeimbang perahu sandeq menggunakan bambu kokoh.",
    kategori: "maritim"
  },
  {
    mandar: "Tasiq",
    fonetik: "ta-si'",
    pos: "Nomina",
    indonesia: "Laut, lautan",
    contoh_mandar: "Maloang tasi'na Mandar masero ruana.",
    contoh_indo: "Luas laut Mandar dan jernih airnya.",
    kategori: "maritim"
  },
  {
    mandar: "Posso",
    fonetik: "pos-so",
    pos: "Nomina",
    indonesia: "Ombak, gelombang laut",
    contoh_mandar: "Lompo possona di tasi' boko.",
    contoh_indo: "Besar ombaknya di laut lepas.",
    kategori: "maritim"
  },
  {
    mandar: "Bangkang",
    fonetik: "bang-kang",
    pos: "Nomina",
    indonesia: "Perahu kecil, sampan",
    contoh_mandar: "Bangkang di wiring tasi' mesang-mesang.",
    contoh_indo: "Perahu kecil di pinggir pantai bersandar sendiri.",
    kategori: "maritim"
  },
  {
    mandar: "Massombal",
    fonetik: "mas-som-bal",
    pos: "Verba",
    indonesia: "Berlayar mengarungi samudra",
    contoh_mandar: "Massombali passandeq mewali di pulau Jawa.",
    contoh_indo: "Berlayarlah para pelaut sandeq menuju pulau Jawa.",
    kategori: "maritim"
  },
  {
    mandar: "Wiring Tasiq",
    fonetik: "wi-ring ta-si'",
    pos: "Nomina",
    indonesia: "Pesisir pantai, tepi laut",
    contoh_mandar: "Mambambo di wiring tasi' Dato Majene.",
    contoh_indo: "Jalan-jalan santai di pesisir pantai Dato Majene.",
    kategori: "maritim"
  },

  // SAQBE, KERAJINAN & PAKAIAN ADAT
  {
    mandar: "Saqbe",
    fonetik: "saq-be",
    pos: "Nomina",
    indonesia: "Sutra halus (khususnya tenun sutra khas Mandar)",
    contoh_mandar: "Lipa saqbe Mandar malolo corana.",
    contoh_indo: "Sarung sutra Mandar sangat indah coraknya.",
    kategori: "budaya"
  },
  {
    mandar: "Lipa",
    fonetik: "li-pa",
    pos: "Nomina",
    indonesia: "Sarung",
    contoh_mandar: "Pakei lipamu melao di boyang ada'.",
    contoh_indo: "Kenakan sarungmu pergi ke rumah adat.",
    kategori: "budaya"
  },
  {
    mandar: "Panetteq",
    fonetik: "pa-net-te'",
    pos: "Nomina",
    indonesia: "Penitenun sarung sutra Mandar",
    contoh_mandar: "Tobaine panette' di Karama maccai tonang.",
    contoh_indo: "Wanita penenun di Karama sangat terampil sekali.",
    kategori: "budaya"
  },
  {
    mandar: "Taropo",
    fonetik: "ta-ro-po",
    pos: "Nomina",
    indonesia: "Teropong benang / alat tenun kayu penyusup benang pakan",
    contoh_mandar: "Mamasang benang taropo di pannyapang.",
    contoh_indo: "Memasukkan benang teropong pada alat anyam.",
    kategori: "budaya"
  },
  {
    mandar: "Sureq",
    fonetik: "su-req",
    pos: "Nomina",
    indonesia: "Motif kain tenun Mandar / surat / tulisan",
    contoh_mandar: "Sure' Penghulu nicarona lipa saqbe.",
    contoh_indo: "Motif Penghulu yang tergambar pada sarung sutra.",
    kategori: "budaya"
  },
  {
    mandar: "Sayyang Pattuqduq",
    fonetik: "say-yang pat-tuq-duq",
    pos: "Nomina",
    indonesia: "Kuda menari khas tradisi khatam Al-Qur'an Mandar",
    contoh_mandar: "Ramai tau mitai sayyang pattuqduq di lalan.",
    contoh_indo: "Ramai orang menyaksikan pertunjukan kuda menari di jalan.",
    kategori: "budaya"
  },

  // KULINER TRADISIONAL MANDAR
  {
    mandar: "Jepa",
    fonetik: "je-pa",
    pos: "Nomina",
    indonesia: "Makanan pokok khas Mandar dari singkong/ubi kayu pipih panggang kelapa",
    contoh_mandar: "Marasa kandeang jepa sita'de bau peapi.",
    contoh_indo: "Sangat nikmat makan jepa bersama ikan bau peapi.",
    kategori: "kuliner"
  },
  {
    mandar: "Bau Peapi",
    fonetik: "ba-u pe-a-pi",
    pos: "Nomina",
    indonesia: "Masakan ikan berkuah khas Mandar dengan bumbu kunyit dan asam mangga (pangi)",
    contoh_mandar: "Bau peapi cakalang macoa nandeallo.",
    contoh_indo: "Ikan masak bau peapi cakalang enak disantap siang hari.",
    kategori: "kuliner"
  },
  {
    mandar: "Golla Kambu",
    fonetik: "gol-la kam-bu",
    pos: "Nomina",
    indonesia: "Kudapan manis tradisional Mandar dari beras ketan, gula merah, dan kelapa",
    contoh_mandar: "Golla kambu pole di Balanipa marasa mannisna.",
    contoh_indo: "Golla kambu asal Balanipa sangat lezat manisnya.",
    kategori: "kuliner"
  },
  {
    mandar: "Pupuq",
    fonetik: "pu-pu'",
    pos: "Nomina",
    indonesia: "Makanan olahan ikan giling berbumbu dibalut telur lalu digoreng bentuk segitiga",
    contoh_mandar: "Mambeli pupu' di pasar Sentral Polewali.",
    contoh_indo: "Membeli pupuq di pasar Sentral Polewali.",
    kategori: "kuliner"
  },
  {
    mandar: "Pangi",
    fonetik: "pa-ngi",
    pos: "Nomina",
    indonesia: "Irisan mangga muda yang dikeringkan sebagai bumbu asam khas Mandar",
    contoh_mandar: "Pasa'e pangi anna macolo bau peapina.",
    contoh_indo: "Masukkan asam mangga agar kuah ikannya segar gurih.",
    kategori: "kuliner"
  },
  {
    mandar: "Loka Anjoroi",
    fonetik: "lo-ka an-jo-ro-i",
    pos: "Nomina",
    indonesia: "Pisang rebus bersantan gurih khas Mandar",
    contoh_mandar: "Mianung kopi kande loka anjoroi di subu allo.",
    contoh_indo: "Minum kopi sambil santap pisang santan di pagi hari.",
    kategori: "kuliner"
  },

  // SIFAT, KEADAAN & KATA HARI INI
  {
    mandar: "Marasa",
    fonetik: "ma-ra-sa",
    pos: "Adjektiva",
    indonesia: "Enak, lezat, nikmat, mantap, menyenangkan",
    contoh_mandar: "Marasa tongang nande kandeang Mandar ite.",
    contoh_indo: "Sungguh sangat lezat masakan hidangan Mandar ini.",
    kategori: "sifat"
  },
  {
    mandar: "Macoa",
    fonetik: "ma-co-a",
    pos: "Adjektiva",
    indonesia: "Baik, bagus, elok budi pekerti",
    contoh_mandar: "Macoa paqmainna tau dioro.",
    contoh_indo: "Sangat baik budi pekerti orang di situ.",
    kategori: "sifat"
  },
  {
    mandar: "Malolo",
    fonetik: "ma-lo-lo",
    pos: "Adjektiva",
    indonesia: "Cantik, molek, elok rupawan, masih muda belia",
    contoh_mandar: "Ana' dara malolo pake lipa saqbe.",
    contoh_indo: "Gadis cantik mengenakan sarung sutra Mandar.",
    kategori: "sifat"
  },
  {
    mandar: "Salili",
    fonetik: "sa-li-li",
    pos: "Adjektiva / Verba",
    indonesia: "Rindu, kangen, teringat kampung halaman",
    contoh_mandar: "Salili' paqmai'ku di kampong Boyang Mandar.",
    contoh_indo: "Rindu sekali hatiku pada kampung halaman Mandar.",
    kategori: "sifat"
  },
  {
    mandar: "Tongang",
    fonetik: "to-ngang",
    pos: "Adverbia / Adjektiva",
    indonesia: "Benar, sungguh, betul, nyata",
    contoh_mandar: "Tongang maqdi apa naoa?",
    contoh_indo: "Benarkah apa yang ia katakan?",
    kategori: "sifat"
  },
  {
    mandar: "Masussaq",
    fonetik: "ma-sus-sa'",
    pos: "Adjektiva",
    indonesia: "Susah, sulit, sukar, berat hati",
    contoh_mandar: "Tandi' masussaq pole poleang ada' tokayang.",
    contoh_indo: "Tidak sulit jika mengikuti tradisi leluhur.",
    kategori: "sifat"
  },
  {
    mandar: "Masannang",
    fonetik: "ma-san-nang",
    pos: "Adjektiva",
    indonesia: "Senang, bahagia, gembira, damai tenteram",
    contoh_mandar: "Masannang atinna pura silolongang.",
    contoh_indo: "Bahagia hatinya setelah saling berjumpa.",
    kategori: "sifat"
  },
  {
    mandar: "Mabassi",
    fonetik: "ma-bas-si",
    pos: "Adjektiva",
    indonesia: "Kenyang (setelah makan)",
    contoh_mandar: "Mabassi pura maande jepa tallu lamba.",
    contoh_indo: "Kenyang setelah menyantap tiga lembar jepa.",
    kategori: "sifat"
  },
  {
    mandar: "Matotoq",
    fonetik: "ma-to-to'",
    pos: "Adjektiva",
    indonesia: "Kuat, kokoh, bertenaga",
    contoh_mandar: "Matoto' batang alena tau panette'.",
    contoh_indo: "Kuat badan dan tenaga orang penenun itu.",
    kategori: "sifat"
  },
  {
    mandar: "Makambeq",
    fonetik: "ma-kam-be'",
    pos: "Adjektiva",
    indonesia: "Manis, ramah dipandang",
    contoh_mandar: "Makambeq cawanna ana' malolo.",
    contoh_indo: "Manis senyum tawa anak perempuan itu.",
    kategori: "sifat"
  },
  {
    mandar: "Madondo",
    fonetik: "ma-don-do",
    pos: "Adjektiva",
    indonesia: "Cepat, lekas, gesit",
    contoh_mandar: "Madondo lalinna melao di Majene.",
    contoh_indo: "Cepat perjalanannya menuju ke Majene.",
    kategori: "sifat"
  },
  {
    mandar: "Malondong",
    fonetik: "ma-lon-dong",
    pos: "Adjektiva",
    indonesia: "Pulas, lelap (tidur nyenyak)",
    contoh_mandar: "Tinro malondongi di bengi allo.",
    contoh_indo: "Tidur nyenyak sekali di malam hari.",
    kategori: "sifat"
  },

  // KATA KERJA (AKTIVITAS SEHARI-HARI)
  {
    mandar: "Maande",
    fonetik: "ma-an-de",
    pos: "Verba",
    indonesia: "Makan",
    contoh_mandar: "Malaomi' maande rapang-rapang.",
    contoh_indo: "Mari kita makan bersama-sama.",
    kategori: "verba"
  },
  {
    mandar: "Mianung",
    fonetik: "mi-a-nung",
    pos: "Verba",
    indonesia: "Minum",
    contoh_mandar: "Mianung wai polo di subu allo.",
    contoh_indo: "Minum air sejuk di pagi hari.",
    kategori: "verba"
  },
  {
    mandar: "Tinro",
    fonetik: "tin-ro",
    pos: "Verba",
    indonesia: "Tidur",
    contoh_mandar: "Melaoi' tinro apa pura bongiqi.",
    contoh_indo: "Pergilah tidur karena hari sudah larut malam.",
    kategori: "verba"
  },
  {
    mandar: "Mambambo",
    fonetik: "mam-bam-bo",
    pos: "Verba",
    indonesia: "Berjalan-jalan santai, bertamasya",
    contoh_mandar: "Mambamboi kami di Polewali subu-subu.",
    contoh_indo: "Kami berjalan-jalan di Polewali pagi-pagi.",
    kategori: "verba"
  },
  {
    mandar: "Melao",
    fonetik: "me-la-o",
    pos: "Verba",
    indonesia: "Pergi, berangkat",
    contoh_mandar: "Melo melao di Mamuju ambo'na.",
    contoh_indo: "Ayahnya ingin berangkat ke Mamuju.",
    kategori: "verba"
  },
  {
    mandar: "Pole",
    fonetik: "po-le",
    pos: "Verba",
    indonesia: "Datang, tiba, berasal dari",
    contoh_mandar: "Pole diumbari i'o sappo?",
    contoh_indo: "Dari mana kamu datang kawan/sepupu?",
    kategori: "verba"
  },
  {
    mandar: "Mitai",
    fonetik: "mi-ta-i",
    pos: "Verba",
    indonesia: "Melihat, memandang, menyaksikan",
    contoh_mandar: "Mitai sandeq berlomba di tasi'.",
    contoh_indo: "Menyaksikan perahu sandeq berlomba di laut.",
    kategori: "verba"
  },
  {
    mandar: "Mareso",
    fonetik: "ma-re-so",
    pos: "Verba",
    indonesia: "Bekerja keras, berusaha sungguh-sungguh",
    contoh_mandar: "Maresoi paqbanua madosa pamana'.",
    contoh_indo: "Bekerja keras masyarakat demi mencari rezeki anak cucu.",
    kategori: "verba"
  },
  {
    mandar: "Mangaing",
    fonetik: "ma-nga-ing",
    pos: "Verba",
    indonesia: "Memancing ikan di laut atau sungai",
    contoh_mandar: "Mangaingi di binanga allo Ahad.",
    contoh_indo: "Memancing di muara sungai pada hari Ahad.",
    kategori: "verba"
  },
  {
    mandar: "Mannasu",
    fonetik: "man-na-su",
    pos: "Verba",
    indonesia: "Memasak, mengolah makanan di dapur",
    contoh_mandar: "Indo' mannasu jepa di boyang.",
    contoh_indo: "Ibu memasak jepa di rumah.",
    kategori: "verba"
  },
  {
    mandar: "Massambayang",
    fonetik: "mas-sam-ba-yang",
    pos: "Verba",
    indonesia: "Shalat, bersembahyang",
    contoh_mandar: "Massambayang subu di masigi.",
    contoh_indo: "Shalat subuh di masjid.",
    kategori: "verba"
  },
  {
    mandar: "Maqbicara",
    fonetik: "maq-bi-ca-ra",
    pos: "Verba",
    indonesia: "Berbicara, bertutur kata",
    contoh_mandar: "Maqbicara basa Mandar siola indo'na.",
    contoh_indo: "Berbicara bahasa Mandar bersama ibunya.",
    kategori: "verba"
  },

  // ANGKA & BILANGAN MANDAR
  {
    mandar: "Mesa / Misa",
    fonetik: "me-sa / mi-sa",
    pos: "Numeralia",
    indonesia: "Satu (1)",
    contoh_mandar: "Mesa boyang di wiring lalan.",
    contoh_indo: "Satu rumah di pinggir jalan.",
    kategori: "angka"
  },
  {
    mandar: "Da'dua / Dua",
    fonetik: "daq-du-a / du-a",
    pos: "Numeralia",
    indonesia: "Dua (2)",
    contoh_mandar: "Dua sandeq massombal silolongang.",
    contoh_indo: "Dua perahu sandeq berlayar bersamaan.",
    kategori: "angka"
  },
  {
    mandar: "Tallu",
    fonetik: "tal-lu",
    pos: "Numeralia",
    indonesia: "Tiga (3)",
    contoh_mandar: "Tallu kembanna lipa saqbe.",
    contoh_indo: "Tiga helai sarung sutra Mandar.",
    kategori: "angka"
  },
  {
    mandar: "Appaq",
    fonetik: "ap-pa'",
    pos: "Numeralia",
    indonesia: "Empat (4)",
    contoh_mandar: "Appaq allona melao massombal.",
    contoh_indo: "Empat hari lamanya pergi berlayar.",
    kategori: "angka"
  },
  {
    mandar: "Lima",
    fonetik: "li-ma",
    pos: "Numeralia",
    indonesia: "Lima (5)",
    contoh_mandar: "Lima tau silolongang di Tinambung.",
    contoh_indo: "Lima orang berkumpul di Tinambung.",
    kategori: "angka"
  },
  {
    mandar: "Annam",
    fonetik: "an-nam",
    pos: "Numeralia",
    indonesia: "Enam (6)",
    contoh_mandar: "Annam wulangna pura mambelajar.",
    contoh_indo: "Enam bulan lamanya sudah belajar.",
    kategori: "angka"
  },
  {
    mandar: "Pitu",
    fonetik: "pi-tu",
    pos: "Numeralia",
    indonesia: "Tujuh (7)",
    contoh_mandar: "Pitu Babana Binanga, Pitu Ulunna Salu.",
    contoh_indo: "Tujuh muara sungai, tujuh hulu sungai (falsafah wilayah Mandar).",
    kategori: "angka"
  },
  {
    mandar: "Aruwa",
    fonetik: "a-ru-wa",
    pos: "Numeralia",
    indonesia: "Delapan (8)",
    contoh_mandar: "Aruwa tette' subu allo kami mombe.",
    contoh_indo: "Pukul delapan pagi kami berangkat.",
    kategori: "angka"
  },
  {
    mandar: "Asera",
    fonetik: "a-se-ra",
    pos: "Numeralia",
    indonesia: "Sembilan (9)",
    contoh_mandar: "Asera wulang ana'na dionggoi.",
    contoh_indo: "Sembilan bulan anaknya dikandung.",
    kategori: "angka"
  },
  {
    mandar: "Sapulo",
    fonetik: "sa-pu-lo",
    pos: "Numeralia",
    indonesia: "Sepuluh (10)",
    contoh_mandar: "Sapulo eppang bau nallolongang.",
    contoh_indo: "Sepuluh ekor ikan berhasil didapat.",
    kategori: "angka"
  },
  {
    mandar: "Dua Pulo",
    fonetik: "du-a pu-lo",
    pos: "Numeralia",
    indonesia: "Dua puluh (20)",
    contoh_mandar: "Dua pulo allona pura massombal.",
    contoh_indo: "Dua puluh hari lamanya berlayar.",
    kategori: "angka"
  },
  {
    mandar: "Sattuhu",
    fonetik: "sat-tu-hu",
    pos: "Numeralia",
    indonesia: "Seratus (100)",
    contoh_mandar: "Sattuhu meter malolona pantai Dato.",
    contoh_indo: "Seratus meter indahnya pesisir pantai Dato.",
    kategori: "angka"
  },
  {
    mandar: "Sasaqbu",
    fonetik: "sa-saq-bu",
    pos: "Numeralia",
    indonesia: "Seribu (1.000)",
    contoh_mandar: "Sasaqbu doi' tandi' sukupi.",
    contoh_indo: "Seribu rupiah belum mencukupi.",
    kategori: "angka"
  },

  // WAKTU & KONDISI ALAM
  {
    mandar: "Allo",
    fonetik: "al-lo",
    pos: "Nomina",
    indonesia: "Hari, siang, matahari",
    contoh_mandar: "Mapasang allona di Mandar ite.",
    contoh_indo: "Terik matahari hari ini di Mandar.",
    kategori: "waktu"
  },
  {
    mandar: "Bongi",
    fonetik: "bo-ngi",
    pos: "Nomina",
    indonesia: "Malam, kegelapan malam",
    contoh_mandar: "Bongi marasa masilolongang keluarga.",
    contoh_indo: "Malam yang syahdu berkumpul bersama keluarga.",
    kategori: "waktu"
  },
  {
    mandar: "Subu",
    fonetik: "su-bu",
    pos: "Nomina",
    indonesia: "Subuh, fajar pagi hari",
    contoh_mandar: "Subu-subu melaoi' di tasi'.",
    contoh_indo: "Pagi-pagi benar kita melaut ke pantai.",
    kategori: "waktu"
  },
  {
    mandar: "Biaq",
    fonetik: "bi-a'",
    pos: "Nomina",
    indonesia: "Besok, keesokan harinya",
    contoh_mandar: "Bia' allo Ahad melao di pasar Tinambung.",
    contoh_indo: "Besok hari Ahad pergi ke pasar Tinambung.",
    kategori: "waktu"
  },
  {
    mandar: "Manawa",
    fonetik: "ma-na-wa",
    pos: "Nomina",
    indonesia: "Kemarin, hari sebelumnya",
    contoh_mandar: "Manawa pura pole sepupu pole di Mamuju.",
    contoh_indo: "Kemarin sepupu sudah tiba dari Mamuju.",
    kategori: "waktu"
  },
  {
    mandar: "Salu",
    fonetik: "sa-lu",
    pos: "Nomina",
    indonesia: "Sungai",
    contoh_mandar: "Salu Mandar maloang ruana.",
    contoh_indo: "Sungai Mandar sangat luas aliran airnya.",
    kategori: "alam"
  },
  {
    mandar: "Binanga",
    fonetik: "bi-na-nga",
    pos: "Nomina",
    indonesia: "Muara sungai tempat bertemunya air sungai dan laut",
    contoh_mandar: "Silolongang bangkang di binanga Balanipa.",
    contoh_indo: "Perahu berkumpul di muara Balanipa.",
    kategori: "alam"
  },
  {
    mandar: "Bulung",
    fonetik: "bu-lung",
    pos: "Nomina",
    indonesia: "Gunung, perbukitan",
    contoh_mandar: "Bulung Gandangdewata marambang langiq.",
    contoh_indo: "Gunung Gandangdewata menjulang tinggi ke langit.",
    kategori: "alam"
  },
  {
    mandar: "Uring",
    fonetik: "u-ring",
    pos: "Nomina",
    indonesia: "Hujan",
    contoh_mandar: "Dungkul uring lompo di Polewali.",
    contoh_indo: "Turun hujan lebat di Polewali.",
    kategori: "alam"
  },
  {
    mandar: "Anging",
    fonetik: "a-nging",
    pos: "Nomina",
    indonesia: "Angin, hawa udara",
    contoh_mandar: "Anging timor madosa to massombal.",
    contoh_indo: "Angin timur membantu para pelaut melaju.",
    kategori: "alam"
  },
  {
    mandar: "Awo",
    fonetik: "a-wo",
    pos: "Nomina",
    indonesia: "Bambu",
    contoh_mandar: "Awo napake pa'giling pallatto sandeq.",
    contoh_indo: "Bambu digunakan untuk cadik penyeimbang sandeq.",
    kategori: "alam"
  },
  {
    mandar: "Wai",
    fonetik: "wa-i",
    pos: "Nomina",
    indonesia: "Air",
    contoh_mandar: "Wai polo malimurang di salu.",
    contoh_indo: "Air sejuk jernih mengalir di sungai.",
    kategori: "alam"
  },

  // ANGGOTA TUBUH & KESEHATAN
  {
    mandar: "Ulu",
    fonetik: "u-lu",
    pos: "Nomina",
    indonesia: "Kepala, hulu",
    contoh_mandar: "Pitu Ulunna Salu riona wilayah pegunungan.",
    contoh_indo: "Pitu Ulunna Salu adalah sebutan wilayah pegunungan.",
    kategori: "tubuh"
  },
  {
    mandar: "Mata",
    fonetik: "ma-ta",
    pos: "Nomina",
    indonesia: "Mata (indra penglihatan)",
    contoh_mandar: "Matanna masero mitai lalan.",
    contoh_indo: "Matanya awas melihat jalanan.",
    kategori: "tubuh"
  },
  {
    mandar: "Lima (Tubuh)",
    fonetik: "li-ma",
    pos: "Nomina",
    indonesia: "Tangan, jemari",
    contoh_mandar: "Limanna panette' mapande mamboko benang.",
    contoh_indo: "Tangan sang penenun lincah mengikat benang.",
    kategori: "tubuh"
  },
  {
    mandar: "Aqe",
    fonetik: "a-qe / a-e",
    pos: "Nomina",
    indonesia: "Kaki",
    contoh_mandar: "Aena mambambo tandi' sandalang.",
    contoh_indo: "Kakinya berjalan tanpa alas sandal.",
    kategori: "tubuh"
  },
  {
    mandar: "Ate",
    fonetik: "a-te",
    pos: "Nomina",
    indonesia: "Hati, perasaan batin",
    contoh_mandar: "Masannang atena mitai ana' buana.",
    contoh_indo: "Bahagia hatinya melihat anak cucunya.",
    kategori: "tubuh"
  },
  {
    mandar: "Rupa",
    fonetik: "ru-pa",
    pos: "Nomina",
    indonesia: "Muka, wajah, rupa paras",
    contoh_mandar: "Rupanna malolo macoa tingkalana.",
    contoh_indo: "Wajahnya cantik elok perilakunya.",
    kategori: "tubuh"
  },

  // PETUAH ADAT & FALSAFAH MANDAR
  {
    mandar: "Siriq",
    fonetik: "si-ri'",
    pos: "Nomina",
    indonesia: "Harga diri, martabat, kehormatan dan integritas moral (falsafah luhur Mandar)",
    contoh_mandar: "Tau Mandar menjunjung siri' anna pacce.",
    contoh_indo: "Orang Mandar menjunjung tinggi harga diri dan kesetiakawanan.",
    kategori: "budaya"
  },
  {
    mandar: "Siwaliparriq",
    fonetik: "si-wa-li-par-ri'",
    pos: "Nomina / Ungkapan",
    indonesia: "Saling tolong-menolong, gotong-royong berbagi beban duka & usaha bersama",
    contoh_mandar: "Siwaliparriq di boyang anna di tasi'.",
    contoh_indo: "Bergotong-royong tolong menolong di darat dan di lautan.",
    kategori: "budaya"
  },
  {
    mandar: "Melamba-lamba",
    fonetik: "me-lam-ba lam-ba",
    pos: "Verba",
    indonesia: "Melambai-lambai, memberi isyarat selamat jalan",
    contoh_mandar: "Melamba-lamba limanna passandeq pole massombal.",
    contoh_indo: "Melambai-lambai tangan para pelaut sandeq tiba dari pelayaran.",
    kategori: "maritim"
  },
  {
    mandar: "Kandeang",
    fonetik: "kan-de-ang",
    pos: "Nomina",
    indonesia: "Makanan, lauk-pauk santapan",
    contoh_mandar: "Maroa kandeang di acara ada' boyang.",
    contoh_indo: "Banyak santapan makanan di acara adat rumah.",
    kategori: "kuliner"
  },
  {
    mandar: "Lego-lego",
    fonetik: "le-go le-go",
    pos: "Nomina",
    indonesia: "Teras depan atau serambi rumah panggung Mandar untuk menyambut tamu",
    contoh_mandar: "Tudangang di lego-lego mianung kopi.",
    contoh_indo: "Duduk santai di serambi rumah panggung sambil minum kopi.",
    kategori: "kehidupan"
  },
  {
    mandar: "Tambing",
    fonetik: "tam-bing",
    pos: "Nomina",
    indonesia: "Dinding rumah kayu / bilik panggung khas Mandar",
    contoh_mandar: "Tambing boyang awo diukir cora Mandar.",
    contoh_indo: "Dinding rumah bambu diukir corak khas Mandar.",
    kategori: "kehidupan"
  },
  {
    mandar: "Daporang",
    fonetik: "da-po-rang",
    pos: "Nomina",
    indonesia: "Dapur tempat memasak",
    contoh_mandar: "Pambawa kayu di daporang mannasu jepa.",
    contoh_indo: "Bawakan kayu bakar ke dapur untuk memasak jepa.",
    kategori: "kehidupan"
  },
  {
    mandar: "Kattang",
    fonetik: "kat-tang",
    pos: "Nomina",
    indonesia: "Ketam, kepiting laut / bakau",
    contoh_mandar: "Lompo kattang napaleppo di tasi'.",
    contoh_indo: "Besar kepiting yang ia tangkap di laut.",
    kategori: "kuliner"
  },
  {
    mandar: "Bau",
    fonetik: "ba-u",
    pos: "Nomina",
    indonesia: "Ikan laut atau tawar",
    contoh_mandar: "Maroa bau cakalang di pangkalan Majene.",
    contoh_indo: "Banyak ikan cakalang di tempat pelelangan Majene.",
    kategori: "kuliner"
  },
  {
    mandar: "Doiq",
    fonetik: "do-i'",
    pos: "Nomina",
    indonesia: "Uang, rupiah",
    contoh_mandar: "Mambeli lipa saqbe pake doi'.",
    contoh_indo: "Membeli sarung sutra menggunakan uang.",
    kategori: "kehidupan"
  },
  {
    mandar: "Passikola",
    fonetik: "pas-si-ko-la",
    pos: "Nomina",
    indonesia: "Siswa, murid, anak sekolah",
    contoh_mandar: "Passikola Mandar mangaji basa daerah.",
    contoh_indo: "Anak-anak sekolah di Mandar mempelajari bahasa daerah.",
    kategori: "kehidupan"
  },
  {
    mandar: "Pangguru",
    fonetik: "pang-gu-ru",
    pos: "Nomina",
    indonesia: "Guru, pendidik, pengajar",
    contoh_mandar: "Pangguru mapande mangajari basa Mandar.",
    contoh_indo: "Guru yang pintar mengajarkan bahasa Mandar.",
    kategori: "kehidupan"
  },
  {
    mandar: "Maccawa",
    fonetik: "mac-ca-wa",
    pos: "Verba",
    indonesia: "Tertawa, tersenyum riang",
    contoh_mandar: "Maccawa kema' ana' kodi' mitai sayyang pattuqduq.",
    contoh_indo: "Tertawa riang anak kecil menyaksikan kuda menari.",
    kategori: "verba"
  },
  {
    mandar: "Mondong",
    fonetik: "mon-dong",
    pos: "Adjektiva",
    indonesia: "Bisu, diam tanpa kata",
    contoh_mandar: "Mondong tandi' maqbicara apa mationg.",
    contoh_indo: "Diam tidak berbicara karena malu/sungkan.",
    kategori: "sifat"
  },
  {
    mandar: "Mationg",
    fonetik: "ma-ti-ong",
    pos: "Adjektiva",
    indonesia: "Malu, sungkan, segan dalam tata krama",
    contoh_mandar: "Mationgi ana' dara mitai tokayang.",
    contoh_indo: "Malu dan segan anak gadis berhadapan dengan orang yang dituakan.",
    kategori: "sifat"
  },
  {
    mandar: "Lalan",
    fonetik: "la-lan",
    pos: "Nomina",
    indonesia: "Jalan, lintasan, rute perjalanan",
    contoh_mandar: "Maloang lalanna mambeko Polewali - Majene.",
    contoh_indo: "Lebar jalannya menghubungkan Polewali - Majene.",
    kategori: "kehidupan"
  },
  {
    mandar: "Masero",
    fonetik: "ma-se-ro",
    pos: "Adjektiva",
    indonesia: "Bersih, jernih, suci",
    contoh_mandar: "Masero wai salu di Tinambung.",
    contoh_indo: "Jernih dan bersih air sungai di Tinambung.",
    kategori: "sifat"
  },
  {
    mandar: "Todeang",
    fonetik: "to-de-ang",
    pos: "Nomina",
    indonesia: "Orang pesisir / orang hilir pantai dalam pembagian wilayah Mandar",
    contoh_mandar: "Todeang mapande massombal di tasi' lompo.",
    contoh_indo: "Masyarakat pesisir Mandar mahir berlayar di laut lepas.",
    kategori: "budaya"
  },
  {
    mandar: "Todalang",
    fonetik: "to-da-lang",
    pos: "Nomina",
    indonesia: "Orang hulu sungai / pedalaman pegunungan Mandar",
    contoh_mandar: "Todalang mapande ma'kebun kopi anna koko.",
    contoh_indo: "Masyarakat pedalaman Mandar mahir berkebun kopi dan cokelat.",
    kategori: "budaya"
  },
  {
    mandar: "Anukku",
    fonetik: "a-nuk-ku",
    pos: "Pronomina",
    indonesia: "Punya saya, milikku",
    contoh_mandar: "Buku kamus ite anukku.",
    contoh_indo: "Buku kamus ini kepunyaan saya.",
    kategori: "sapaan"
  },
  {
    mandar: "Anummu",
    fonetik: "a-num-mu",
    pos: "Pronomina",
    indonesia: "Punya kamu, milikmu",
    contoh_mandar: "Lipa saqbe di meja anummuri?",
    contoh_indo: "Apakah sarung sutra di meja itu milikmu?",
    kategori: "sapaan"
  },
  {
    mandar: "Tania",
    fonetik: "ta-ni-a",
    pos: "Partikel",
    indonesia: "Bukan, tidak benar demikian",
    contoh_mandar: "Tania iya' na'oa pura melao.",
    contoh_indo: "Bukan saya yang dimaksud sudah berangkat.",
    kategori: "sifat"
  },
  {
    mandar: "Mala",
    fonetik: "ma-la",
    pos: "Adverbia",
    indonesia: "Bisa, boleh, dapat dilakukan",
    contoh_mandar: "Mala maqdi iya' melao siola kita'?",
    contoh_indo: "Bolehkah saya ikut pergi bersama Anda?",
    kategori: "sifat"
  },
  {
    mandar: "Pura",
    fonetik: "pu-ra",
    pos: "Adverbia",
    indonesia: "Sudah, telah selesai",
    contoh_mandar: "Pura maande jepa anna bau peapi.",
    contoh_indo: "Sudah makan jepa dan ikan bau peapi.",
    kategori: "waktu"
  },
  {
    mandar: "Banna",
    fonetik: "ban-na",
    pos: "Adverbia",
    indonesia: "Baru saja, belum lama",
    contoh_mandar: "Banna pole passandeq pole di Makassar.",
    contoh_indo: "Baru saja tiba para pelaut sandeq dari Makassar.",
    kategori: "waktu"
  },
  {
    mandar: "Dioro",
    fonetik: "di-o-ro",
    pos: "Adverbia",
    indonesia: "Di situ (jarak menengah)",
    contoh_mandar: "Pattarongai bukumu dioro.",
    contoh_indo: "Taruhlah bukumu di situ.",
    kategori: "kehidupan"
  },
  {
    mandar: "Diaq",
    fonetik: "di-a'",
    pos: "Adverbia",
    indonesia: "Di sini (jarak dekat)",
    contoh_mandar: "Tudangi dia' silolongang kami.",
    contoh_indo: "Duduklah di sini bersama-sama kami.",
    kategori: "kehidupan"
  },
  {
    mandar: "Ditu",
    fonetik: "di-tu",
    pos: "Adverbia",
    indonesia: "Di sana (jarak jauh)",
    contoh_mandar: "Mitai bulung Gandangdewata ditu.",
    contoh_indo: "Lihatlah gunung Gandangdewata di sana.",
    kategori: "kehidupan"
  },
  {
    mandar: "Innai",
    fonetik: "in-na-i",
    pos: "Pronomina",
    indonesia: "Siapa",
    contoh_mandar: "Innai sannammu sappo?",
    contoh_indo: "Siapakah namamu kawan/saudara?",
    kategori: "sapaan"
  },
  {
    mandar: "Inga",
    fonetik: "i-nga",
    pos: "Verba",
    indonesia: "Ingat, kenang, tidak lupa",
    contoh_mandar: "Ingai petawa indo' anna amamu.",
    contoh_indo: "Ingatlah nasehat dari ibu dan ayahmu.",
    kategori: "verba"
  },
  {
    mandar: "Pattunu",
    fonetik: "pat-tu-nu",
    pos: "Nomina / Verba",
    indonesia: "Pembakar, pemanggang (seperti membakar jepa atau ikan)",
    contoh_mandar: "Pattunu panji napake manunu bau.",
    contoh_indo: "Panggangan digunakan untuk membakar ikan.",
    kategori: "kuliner"
  },
  {
    mandar: "Manuq",
    fonetik: "ma-nu'",
    pos: "Nomina",
    indonesia: "Ayam",
    contoh_mandar: "Manu' koro-koro di subu allo.",
    contoh_indo: "Ayam berkokok di waktu fajar subuh.",
    kategori: "alam"
  },
  {
    mandar: "Tedong",
    fonetik: "te-dong",
    pos: "Nomina",
    indonesia: "Kerbau",
    contoh_mandar: "Tedong napake ma'bajak pambowangan.",
    contoh_indo: "Kerbau digunakan untuk membajak sawah.",
    kategori: "alam"
  },
  {
    mandar: "Meonge",
    fonetik: "me-o-nge",
    pos: "Verba / Adjektiva",
    indonesia: "Menangis, bersedih mengeluarkan air mata",
    contoh_mandar: "Da' meonge kandi'ku malolo.",
    contoh_indo: "Jangan menangis adik perempuanku yang manis.",
    kategori: "sifat"
  },
  {
    mandar: "Kallang",
    fonetik: "kal-lang",
    pos: "Nomina",
    indonesia: "Alang-alang, ilalang rumput liar",
    contoh_mandar: "Maloang kallang di wiring bulung.",
    contoh_indo: "Terhampar alang-alang di lereng pegunungan.",
    kategori: "alam"
  },
  {
    mandar: "Sikola",
    fonetik: "si-ko-la",
    pos: "Nomina",
    indonesia: "Sekolah, tempat menimba ilmu",
    contoh_mandar: "Melao sikola manuntut ilimiu macoa.",
    contoh_indo: "Pergi ke sekolah menuntut ilmu yang bermanfaat.",
    kategori: "kehidupan"
  },
  {
    mandar: "Masigi",
    fonetik: "ma-si-gi",
    pos: "Nomina",
    indonesia: "Masjid, rumah ibadah umat Islam",
    contoh_mandar: "Masigi lompo di pusat kota Majene.",
    contoh_indo: "Masjid agung di pusat kota Majene.",
    kategori: "kehidupan"
  },
  {
    mandar: "Passambayang",
    fonetik: "pas-sam-ba-yang",
    pos: "Nomina",
    indonesia: "Orang yang mendirikan shalat / perlengkapan shalat",
    contoh_mandar: "Pattarongai passambayang di lego-lego.",
    contoh_indo: "Siapkan sajadah shalat di serambi rumah.",
    kategori: "kehidupan"
  },
  {
    mandar: "Da'a / Daq",
    fonetik: "da-'a / daq",
    pos: "Partikel",
    indonesia: "Jangan, larangan melakukan sesuatu",
    contoh_mandar: "Da' melao di tasi' pole possona lompo.",
    contoh_indo: "Jangan melaut jika gelombangnya tinggi.",
    kategori: "sifat"
  },
  {
    mandar: "Nande",
    fonetik: "nan-de",
    pos: "Nomina",
    indonesia: "Nasi, makanan",
    contoh_mandar: "Pura mande nande siola bau peapi.",
    contoh_indo: "Sudah makan nasi berlauk ikan bau peapi.",
    kategori: "kuliner"
  },
  {
    mandar: "Anjoro",
    fonetik: "an-jo-ro",
    pos: "Nomina",
    indonesia: "Kelapa (komoditas utama Sulawesi Barat)",
    contoh_mandar: "Maroa anjoro napapole petani di Polewali.",
    contoh_indo: "Banyak kelapa dihasilkan petani di Polewali Mandar.",
    kategori: "alam"
  },
  {
    mandar: "Kopi",
    fonetik: "ko-pi",
    pos: "Nomina",
    indonesia: "Kopi (kopi khas pegunungan Kurra / Mamasa Mandar)",
    contoh_mandar: "Mianung kopi pahit sita'de jepa.",
    contoh_indo: "Minum kopi ditemani hidangan jepa hangat.",
    kategori: "kuliner"
  },
  {
    mandar: "Sita'de",
    fonetik: "si-ta'-de",
    pos: "Adverbia",
    indonesia: "Bersama, didampingi, berbarengan",
    contoh_mandar: "Mambambo sita'de sappo.",
    contoh_indo: "Berjalan-jalan bersama sepupu / sahabat.",
    kategori: "sapaan"
  },
  {
    mandar: "Pura-pura",
    fonetik: "pu-ra pu-ra",
    pos: "Adverbia",
    indonesia: "Semuanya, seluruhnya selesai",
    contoh_mandar: "Pura-pura nandeang dialapi.",
    contoh_indo: "Semua hidangan sudah disajikan.",
    kategori: "sifat"
  },
  {
    mandar: "Aloloan",
    fonetik: "a-lo-lo-an",
    pos: "Nomina",
    indonesia: "Keelokan, kecantikan, keanggunan",
    contoh_mandar: "Aloloan ada' Mandar tandi' ada maringke.",
    contoh_indo: "Keanggunan adat Mandar tiada tandingannya.",
    kategori: "budaya"
  },
  {
    mandar: "Pasa",
    fonetik: "pa-sa",
    pos: "Nomina",
    indonesia: "Pasar, tempat perniagaan",
    contoh_mandar: "Melao di pasa Sentral mambeli lipa saqbe.",
    contoh_indo: "Pergi ke pasar Sentral membeli sarung sutra.",
    kategori: "kehidupan"
  },
  {
    mandar: "Koro-koro",
    fonetik: "ko-ro ko-ro",
    pos: "Verba",
    indonesia: "Berkokok (suara kokok ayam jago)",
    contoh_mandar: "Manu' koro-koro patandana subu pura pole.",
    contoh_indo: "Ayam berkokok menandakan fajar subuh telah tiba.",
    kategori: "alam"
  },
  {
    mandar: "Pettolong",
    fonetik: "pet-to-long",
    pos: "Nomina",
    indonesia: "Bantuan, pertolongan budi baik",
    contoh_mandar: "Pettolongmu tandi' nulupai iyaq.",
    contoh_indo: "Pertolonganmu tak akan kulupakan.",
    kategori: "sifat"
  },
  {
    mandar: "Maringke",
    fonetik: "ma-ring-ke",
    pos: "Adjektiva",
    indonesia: "Ringan, mudah, gampang",
    contoh_mandar: "Maringkei jama-jamaanna pole siwaliparriq.",
    contoh_indo: "Pekerjaan menjadi ringan jika saling tolong-menolong.",
    kategori: "sifat"
  },
  {
    mandar: "Baraq",
    fonetik: "ba-ra'",
    pos: "Nomina",
    indonesia: "Barat / angin barat musim gelombang",
    contoh_mandar: "Musim bara' lompo possona di tasi'.",
    contoh_indo: "Musim angin barat gelombangnya besar di lautan.",
    kategori: "maritim"
  },
  {
    mandar: "Timor",
    fonetik: "ti-mor",
    pos: "Nomina",
    indonesia: "Timur / angin timur cuaca teduh bersahabat",
    contoh_mandar: "Anging timor masannang massombal passandeq.",
    contoh_indo: "Angin timur membuat nyaman pelaut sandeq berlayar.",
    kategori: "maritim"
  },
  {
    mandar: "Bulu-bulu",
    fonetik: "bu-lu bu-lu",
    pos: "Nomina",
    indonesia: "Bulu, rambut halus",
    contoh_mandar: "Bulu-bulunna tedong masero pura niba'ba.",
    contoh_indo: "Bulu kerbau bersih setelah dimandikan.",
    kategori: "tubuh"
  },
  {
    mandar: "Pangolo",
    fonetik: "pa-ngo-lo",
    pos: "Nomina",
    indonesia: "Haluan, bagian muka perahu sandeq",
    contoh_mandar: "Pangolo sandeq mapance namboko tasi'.",
    contoh_indo: "Haluan sandeq yang runcing membelah ombak lautan.",
    kategori: "maritim"
  },
  {
    mandar: "Palliliq",
    fonetik: "pal-li-li'",
    pos: "Nomina",
    indonesia: "Wilayah taklukan atau daerah pesisir bawahan kerajaan adat",
    contoh_mandar: "Palliliq Balanipa tontong marasa aman.",
    contoh_indo: "Wilayah Balanipa senantiasa aman tenteram.",
    kategori: "budaya"
  },
  {
    mandar: "Puang",
    fonetik: "pu-ang",
    pos: "Nomina",
    indonesia: "Tuan, penghormatan kepada tokoh bangsawan / tetua terhormat Mandar",
    contoh_mandar: "Tabe' puang, mala maqdi kami pole tudang?",
    contoh_indo: "Permisi tuan yang terhormat, bolehkah kami duduk bersama?",
    kategori: "sapaan"
  },
  {
    mandar: "Tabeq",
    fonetik: "ta-be'",
    pos: "Ungkapan",
    indonesia: "Permisi, maaf, santun lewat di depan orang / membuka bicara",
    contoh_mandar: "Tabe' kaka', iya' melo melao di lego-lego.",
    contoh_indo: "Permisi kakak, saya ingin lewat ke beranda.",
    kategori: "sapaan"
  },
  {
    mandar: "Salamaq",
    fonetik: "sa-la-ma'",
    pos: "Ungkapan / Nomina",
    indonesia: "Selamat, kesejahteraan, aman sentosa",
    contoh_mandar: "Salama' di lalan laling massombalmu.",
    contoh_indo: "Selamat di jalan dalam perjalanan pelayaranmu.",
    kategori: "sapaan"
  }
];

// Helper functions for data
window.DICTIONARY_DATA = DICTIONARY_DATA;
