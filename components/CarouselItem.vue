<template>
  <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' class="relative">
    <div class="hs-carousel relative overflow-hidden w-full h-[600px] sm:h-[650px] bg-white ">
      <div
        class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-1000 opacity-0">

        <div v-for="(slide, index) in sliders.slider" :key="index" class="hs-carousel-slide ">
          <div class="relative">
            <img :src="slide.img" class="absolute inset-0 object-cover w-full h-[650px]" alt="" />
            <div :class="slide.class">
              <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div class="flex flex-col items-center justify-between xl:flex-row">
                  <div class="w-full py-40 max-w-screen-lg mx-auto sm:text-center mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                    <h1
                      class="mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:pr-6 text-yellow-400 sm:px-12 sm:leading-none">
                      {{ slide.judul }}
                    </h1>
                    <p class="mb-4 text-white md:text-lg">
                    {{ slide.deskripsi }}
                    </p>
                    <a :href="slide.link" aria-label=""
                      class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-yellow-400 hover:text-yellow-700">
                      Learn more
                      <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        <path
                          d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button type="button"
      class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/0">
     
  <img src="https://api.iconify.design/uil:arrow-circle-left.svg" class="p-2 w-14 h-14 bg-yellow-400/60 hover:bg-yellow-400" alt="">

    </button>
    <button type="button"
      class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/0">
     
  <img src="https://api.iconify.design/uil:arrow-circle-right.svg" class="p-2 w-14 h-14 bg-yellow-400/60 hover:bg-yellow-400" alt="">


    </button>
  </div>
</template>

<script setup>
const sliders = {
  "slider": [
    {
      "judul": "Transportasi Laut & Jasa Logistik",
      "deskripsi": "Solusi logistik maritim untuk pengiriman berbagai macam kargo. Layanan terbaik dengan armada yang handal.",
      "img": "/kss-2.png",
      "class": "relative px-12 h-[650px] bg-gray-900 bg-opacity-75",
      "link": "/"
    },
    {
      "judul": "Layanan Kelautan & Lepas Pantai",
      "deskripsi": "Dukungan lengkap untuk proyek kelautan dan lepas pantai. Menyediakan solusi terbaik untuk kebutuhan Anda.",
      "img": "/kss-1.png",
      "class": "relative px-12 h-[650px] bg-blue-900 bg-opacity-75",
      "link": "/"
    },
    {
      "judul": "Kapal Pendukung Untuk Survei Bawah Laut",
      "deskripsi": "Armada yang mumpuni untuk mendukung survei bawah laut. Teknologi terbaru untuk hasil terbaik.",
      "img": "/kss-3.png",
      "class": "relative px-12 h-[650px] bg-red-900 bg-opacity-75",
      "link": "/"
    },
    {
      "judul": "Layanan Vassel",
      "deskripsi": "Berbagai jenis vassel untuk mendukung kegiatan di laut. Solusi efisien untuk kebutuhan transportasi Anda.",
      "img": "/kss-4.png",
      "class": "relative px-12 h-[650px] bg-yellow-900 bg-opacity-75",
      "link": "/"
    }
  ]
}

</script>
