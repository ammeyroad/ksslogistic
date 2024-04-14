<template>
  <Navigator class=" sticky top-0 z-20" />
  <section id="slider">
    <CarouselItem />
  </section>
 
  <section id="divider">
    <div class="mx-auto ">
      <div class="grid sm:grid-cols-3">
        <nuxt-link :to="item.url" v-for="item in sliders.divider.isi" :class="item.css" class="">
          <div class="hover:backdrop-blur-sm  duration-100 p-10" :class="item.gaya">
            <div class="group ">
              <img :src="item.icon" class="w-12" alt="" />
              <a :href="item.url" class="">
                <h3 class="text-lg uppercase font-bold pr-6 mt-6">
                  {{ item.judul }}
                </h3>
                <p>
                  {{ item.deskripsi }}
                </p>

              </a>

            </div>
          </div>
        </nuxt-link>

      </div>
    </div>
  </section>
  <section id="about" class="bg-white overflow-hidden min-h-max flex items-center bg-auto bg-center relative bg-[url('/bgpattern-2.svg')]">
    <div
      class="absolute top-0 left-0 -translate-x-[34%] -translate-y-[30%] w-4/5 rounded-full aspect-square bg-blue-600/30 backdrop-filter blur-3xl opacity-30">
    </div>
    <div
      class="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-blue-600/70 backdrop-filter blur-3xl opacity-50">
    </div>
    <div class="px-4 py-16 mb-60 sm:mb-32 mx-auto sm:max-w-xl lg:max-w-screen-xl sm:px-0 lg:py-32">
      <div class="grid max-w-screen-xl gap-8 lg:grid-cols-12 sm:mx-auto">
        <div class="flex flex-col justify-center lg:col-span-6">
          <h3
            class="text-blue-600 font-bold uppercase pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
            {{ sliders.aboutus.badge }}
          </h3>
          <!-- Features -->
          <div class="">
            <div class="flex flex-col sm:mb-0">
              <div class="max-w-xl mb-8 md:mx-autolg:max-w-2xl md:mb-12">
                <div id="judul">
                  <h1 class=" mb-2 text-3xl font-bold leading-none tracking-tight text-blue-00 sm:text-4xl md:mx-auto">
                    <span class="bg-blue-50 inline-block text-pink border border-dashed border-blue-600 m-1 p-2"> {{
                      sliders.aboutus.span }}</span> {{ sliders.aboutus.judul }}
                  </h1>
                  <p class=" font-medium mt-4">
                    {{ sliders.aboutus.deskripsi }}
                  </p>
                </div>
                <ul class="space-y-5 sm:space-y-4 my-8">
                  <li v-for="item in sliders.aboutus.alasan" class="flex space-x-3 items-top">
                    <span
                      class="  p-2 h-6 w-6 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="flex-shrink-0 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <h3 class="font-medium capitalize"> {{ item }} </h3>
                  </li>

                </ul>
                <a href="/" type="button"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 border border-gray-200 text-white hover:text-black shadow-sm hover:bg-yellow-400 disabled:opacity-50 disabled:pointer-events-none ">
                  About Us
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>


          </div>

        </div>
        <div class="lg:col-span-6">
          <div class="grid grid-cols-2">
            <img class="object-cover w-full h-96 col-span-2" src="/kss-3.png" alt="" />
            <img class="object-cover w-full h-48 border-b-8 border-blue-600" src="/kss-1.png" alt="" />
            <img class="object-cover w-full h-48 border-b-8 border-blue-600" src="/kss-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="produk"
    class="bg-blue-700  sm:bg-bottom-left sm:bg-no-repeat bg-blend-overlay bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')]">
    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-white">
      <div
        class="max-w-screen-lg border-t-8 border-blue-600 relative sm:-mt-32 -mt-48 bg-cover bg-blend-overlay bg-[url('/kss-3.png')] bg-white/90 bg-center sm:mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4">
          <div v-for="item in sliders.services.stats" class="p-6 md:p-12 hover:bg-white">
            <img :src="item.icon" class="w-10" />
            <h3 class="font-bold text-3xl pt-6 text-blue-600">
              {{ item.angka }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              {{ item.judul }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 max-w-screen-lg my-32 mx-auto items-end mb-6 md:mb-12">
        <div class="mb-4">
          <h3
            class="text-white font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-white before:rounded-full">
            {{ sliders.services.badge }}
          </h3>
          <h1 class=" mb-2 text-3xl font-bold tracking-tight  text-yellow-400 sm:text-4xl sm:leading-none"> Layanan seperti <span class="bg-blue-900/50 inline-block border border-dashed border-blue-600 p-2">{{ sliders.services.span }}</span> dan lainnya
                  </h1>
        
        </div>

        <p class="mb-4 clamp-word">
          {{ sliders.services.deskripsi }}
        </p>
      </div>

      <div class="grid gap-4 row-gap-5 mb-24 sm:mb-48 lg:grid-cols-4 sm:grid-cols-2">
        <a v-for="item in sliders.services.produk" :href="item.url" aria-label="View Item" class="">
          <div
            class="relative overflow-hidden transition duration-100 transform shadow-lg border-b-4 border-yellow-400 hover:-translate-y-2 hover:shadow-2xl group">
            <img class="object-cover w-full h-72 md:h-64 xl:h-80" :src="item.icon" alt="" />
            <div
              class="absolute duration-100 group-hover:bg-yellow-400/75 group-hover:text-black inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-50 text-white group-hover:translate-y-0  translate-y-24 sm:translate-y-36">
              <h3 class="text-2xl mb-4 font-bold uppercase">
                {{ item.judul }}
              </h3>
              <p class="">{{ item.deskripsi }}</p>
            </div>
          </div>
        </a>
      </div>

      <div
        class="max-w-screen-lg relative -mb-32 bg-cover bg-opacity-90 bg-blend-darken bg-[url('/kss-3.png')] bg-green-800 bg-center sm:mx-auto">
        <div class="hover:backdrop-blur-sm border-b-8 border-blue-600 shadow-lg bg-green-400/70 py-5 px-2 lg:p-16">
          <div class="max-w-screen-xl scale-90 hover:scale-95 duration-100 md:mx-auto text-center">
            <h1 class="mb-6 px-6 sm:px-20 text-2xl font-bold tracking-tighttext-white sm:text-4xl md:mx-auto">
              Komitmen untuk Bumi dengan Menjadi Navigasi Hijau
            </h1>
            <p class="text-black text-lg text-white">
              KSS berjanji untuk menjaga keberlanjutan planet kita dengan mengintegrasikan praktik ramah lingkungan dalam setiap aspek bisnisnya, mewujudkan navigasi yang lebih hijau untuk masa depan yang lebih baik.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="project"
    class="bg-top  bg-no-repeat bg-slate-50 pt-48 sm:pt-72 bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')]">
    <div class="px-4 pb-16 mx-auto max-w-screen-xl  ">
      <div class=" sm:mx-auto lg:max-w-screen-xl sm:text-center">
        <div class="flex flex-col  sm:text-center">
          <h3
            class="text-blue-600 font-bold uppercase pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
            {{ sliders.projects.badge }}
          </h3>
          <!-- Features -->
          <div class="">
            <div class="flex flex-col sm:mb-0">
              <div class=" mb-8  md:mb-12">
                <div id="judul">
                  <h1 class=" mb-2 text-3xl font-bold leading-none tracking-tight text-blue-00 sm:text-4xl md:mx-auto capitalize	">
                    {{ sliders.projects.judul }} <span class="bg-blue-50 inline-block border border-dashed border-blue-600 p-2"> {{
                      sliders.projects.span }}</span> 
                  </h1>
                  <p class=" font-medium mt-4 max-w-screen-lg mx-auto">
                    {{ sliders.projects.deskripsi }}
                  </p>
                </div>
             
                <a href="/" type="button"
                  class="py-3 mt-8 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 border border-gray-200 text-white hover:text-black shadow-sm hover:bg-yellow-400 disabled:opacity-50 disabled:pointer-events-none ">
                 Semua Project 
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>


          </div>

        </div>
      </div>
      <div class="pt-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pb-20">
        <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <a v-for="item in sliders.projects.produk"
            class="flex flex-col group bg-white hover:border shadow-sm overflow-hidden hover:shadow-lg transition"
            href="/">
            <div class="">
              <div class="relative bg-white overflow-hidden">
                <img class="w-full scale-100 hover:scale-110 duration-200 h-[300px]" :src="item.gambar"
                  alt="Image Description" />
                <div class="absolute top-0 start-0 end-0">
                  <div class="p-4 md:p-5 flex">
                    <div class="flex justify-center items-center h-10 w-10 bg-white">
                      <img :src="item.icon" alt="" class="w-6 h-6" />
                    </div>
                    <span
                      class="inline-flex items-center gap-x-1.5 py-1.5 px-3 text-xs font-medium bg-red-600 text-white">{{ item.kat }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 md:p-5">
              <p class="font-semibold text-gray-500 text-sm mb-6">{{ item.perusahaan }}</p>
              <h3 class="text-2xl capitalize font-bold text-blue-600">
                {{ item.judul }}
              </h3>
            </div>
            <div class="bg-gray-100 py-2 px-4 md:py-4 md:px-5">
              <p class="italic text-sm text-gray-600">
                {{ item.date }}
              </p>
            </div>
          </a>
        </div>
      </div>
      <div id="client" class="grid grid-cols-2 sm:grid-cols-7 gap-2 lg:gap-6">
        <div v-for="(index) in 13"
          class=" border border-white hover:shadow-lg hover:border hover:border-gray-100 duration-200 bg-white/50 ">
          <img :src="'/clinet-' + index + '.png'" class="mx-auto scale-90  hover:scale-100 duration-200" alt="">
        </div>

      </div>
    </div>
  </section>

  
</template>


<script setup>
const sliders = {
  "divider": {
    "isi":
      [

        {
          "id": 2,
          "icon": "/icn/bold-4.svg",
          "gaya": "hover:bg-yellow-400/70 hover:text-black",
          "css": "bg-yellow-600 bg-cover bg-blend-multiply bg-[url('/kss-3.png')] text-white",
          "judul": "Mengenal Lebih KSS",
          "deskripsi": "Kenali lebih dalam tentang KSS Logistic dan layanan yang kami tawarkan.",
          "url": "/"
        },
        {
          "id": 1,
          "icon": "/icn/bold-23.svg",
          "gaya": "hover:bg-blue-600/70",
          "css": "bg-blue-900 bg-cover bg-blend-multiply bg-[url('/kss-2.png')] text-white",
          "judul": "Layanan Utama KSS",
          "deskripsi": "Solusi logistik maritim dan lepas pantai yang handal dan inovatif.",
          "url": "/"
        },
        {
          "id": 3,
          "icon": "/icn/bold-29.svg",
          "gaya": "hover:bg-red-600/70",
          "css": "bg-red-900 bg-cover bg-blend-multiply bg-[url('/kss-1.png')] text-white",
          "judul": "Proyek yang Selesai",
          "deskripsi": "Daftar proyek yang telah berhasil diselesaikan oleh KSS Logistic.",
          "url": "/"
        }
      ]
  },
  "aboutus": {
    "badge": "About Us",
    "judul": "informasi lengkap ",
    "span": "Karya Sarana Samudra",
    "deskripsi": "Kami berkomitmen untuk menyediakan layanan berkualitas tinggi dan inovatif kepada pelanggan kami.",
    "alasan": [
      "Pengalaman luas dalam industri logistik maritim dan lepas pantai.",
      "Komitmen terhadap layanan berkualitas tinggi dan inovatif.",
      "Tim profesional yang didedikasikan untuk memberikan pelayanan terbaik kepada pelanggan.",
      "Penggunaan teknologi terkini dan armada modern untuk operasi logistik yang efisien.",
      "Prioritas utama pada kepuasan pelanggan untuk memberikan solusi yang memuaskan."
    ]
  },
  "services": {
    "stats": [
      {
        "id": 1,
        "angka": "42 kapal",
        "judul": "Vessel Logistic",
        "icon": "/icn/bold-6.svg"
      },
      {
        "id": 2,
        "angka": "+10 Tahun",
        "judul": "Pengalaman Melaut",
        "icon": "/icn/bold-17.svg"
      },
      {
        "id": 3,
        "angka": "98 Persen",
        "judul": "Kepuasan Pelanggan",
        "icon": "/icn/bold-11.svg"
      },
      {
        "id": 4,
        "angka": "24/7 jam",
        "judul": "Dukungan Layanan",
        "icon": "/icn/bold-29.svg"
      }
    ],
    "badge": "Services",
    "judul": "dan lainnya",
    "span": "Logistik Maritim, Offshore",
    "deskripsi": "Kami menawarkan berbagai layanan logistik maritim dan lepas pantai, termasuk transportasi laut, dukungan kelautan, dan kapal pendukung untuk survei bawah laut.",
    "produk": [
      {
        "id": 1,
        "url": "/",
        "judul": "Layanan Logistik Maritim",
        "icon": "kss-2.png",
        "deskripsi": "Solusi lengkap untuk kebutuhan logistik maritim Anda, dari pengiriman kargo hingga dukungan proyek infrastruktur pelabuhan.",
        "isi": [
          "Mensuplai kapal instalasi lepas pantai",
          "Menarik, berlabuh, dan memposisikan kapal instalasi lepas pantai",
          "Pengiriman berbagai macam kargo seperti batubara, pasir, cangkang sawit, barang curah, dll",
          "Armada kami mendukung proyek pengembangan infrastruktur pelabuhan"
        ]
      },
      {
        "id": 2,
        "url": "/",
        "judul": "Layanan Lepas Pantai",
        "icon": "kss-1.png",
        "deskripsi": "Dukungan komprehensif untuk proyek lepas pantai, termasuk penyimpanan minyak serta pengiriman muatan ke rig dan platform.",
        "isi": [
          "Dukungan untuk penyimpanan produksi minyak dan gas terapung",
          "Dukungan untuk proyek rekayasa, pengadaan, konstruksi, dan instalasi kelautan dan lepas pantai",
          "Pengiriman muatan material/material ke rig/platform",
          "Menyediakan bejana suplai untuk pekerjaan pemasangan kabel"
        ]
      },
      {
        "id": 3,
        "url": "/",
        "judul": "Layanan Manajemen Kapal",
        "icon": "kss-4.png",
        "deskripsi": "Penyediaan manajemen teknis, manajemen risiko, dan layanan kru kapal yang handal untuk memastikan operasi kapal yang efisien.",
        "isi": [
          "Manajemen Teknis kapal",
          "Manajemen Risiko kapal",
          "Manajemen Kru kapal",
          "Pemeliharaan dan Perbaikan Rutin"
        ]
      },
      {
        "id": 4,
        "url": "/",
        "judul": "Layanan Kapal Vessel",
        "icon": "kss-3.png",
        "deskripsi": "Pilihan beragam kapal dilengkapi dengan fasilitas modern dan teknologi terkini untuk memenuhi kebutuhan kegiatan di laut.",
        "isi": [
          "Penyediaan berbagai jenis kapal untuk mendukung berbagai kegiatan di laut",
          "Fasilitas modern untuk memastikan kenyamanan dan keamanan pelanggan",
          "Teknologi terkini untuk operasi kapal yang efisien",
          "Tim profesional yang siap memberikan layanan terbaik kepada Anda"
        ]
      }
    ]
  },
  "footer": {
    "logo": "https://ksslogistic.com/wp-content/uploads/2021/09/KSS_Logo-ConvertImage.png",
    "judul": "Mengapa Memilih Kami Sebagai Mitra Logistik Anda",
    "deskripsi": "Kami adalah pilihan utama untuk kebutuhan logistik maritim Anda karena kami memiliki pengalaman yang luas.",
    "telp": "+62 21 22722351",
    "email": "marketing@ksslogistic.com",
    "alamat": "South Quarter, Tower A Lt. 17 Unit A, Jl. RA Kartini Kav. 8 Jakarta – 12430"
  },
  "projects": {
    "badge": "Projects",
    "span": "daftar client",
    "judul": "Proyek terbaru dan ",
    "deskripsi": "Kami telah berhasil menyelesaikan berbagai proyek logistik maritim dan lepas pantai, termasuk pengiriman kargo besar, dukungan konstruksi kelautan, dan survei bawah laut.",
    "produk": [
      {
        "id": 1,
        "url": "/",
        "perusahaan" : "PT. EGS Indonesia",
        "judul": "Subsea geophysical Survey Project",
        "icon": "/icn/bold-11.svg",
        "gambar": "kss-2.png",
        "kat": "Management",
        "date": "July - Desember"
       
      },
      {
        "id": 2,
        "url": "/",
        "perusahaan" : "PT. Jawa Satu Power",
        "judul": "Boarding platform installation Project",
        "icon": "/icn/bold-12.svg",
        "gambar": "kss-3.png",
        "kat": "vessel",
        "date": "Januari - September"
       
      },
      {
        "id": 3,
        "url": "/",
        "perusahaan" : "PT. Humolco LNG Indonesia",
        "judul": "Temporary power supply for LNG Aquarius",
        "icon": "/icn/bold-14.svg",
        "gambar": "kss-4.png",
        "kat": "Offshore",
        "date": "April - June"
       
      },
    ]
  }
}

</script>