<script setup lang="ts"></script>

<template>
  <div class="bg-gray-50">

    <NuxtLoadingIndicator />

  <!-- <header>
      <div class="py-[20px] px-[50px]">
        <div class="flex flex-wrap gap-x-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/accordion">Accordion</NuxtLink>
          <NuxtLink to="/carousel">Carousel</NuxtLink>
          <NuxtLink to="/collapse">Collapse</NuxtLink>
          <NuxtLink to="/dropdown">Dropdown</NuxtLink>
          <NuxtLink to="/input-number">Input Number</NuxtLink>
          <NuxtLink to="/overlay">Overlay</NuxtLink>
          <NuxtLink to="/pin-input">Pin Input</NuxtLink>
          <NuxtLink to="/remove-element">Remove Element</NuxtLink>
          <NuxtLink to="/scrollspy">Scrollspy</NuxtLink>
          <NuxtLink to="/select">Select</NuxtLink>
          <NuxtLink to="/stepper">Stepper</NuxtLink>
          <NuxtLink to="/strong-password">Strong Password</NuxtLink>
          <NuxtLink to="/tabs">Tabs</NuxtLink>
          <NuxtLink to="/toggle-count">Toggle Count</NuxtLink>
          <NuxtLink to="/toggle-password">Toggle Password</NuxtLink>
          <NuxtLink to="/tooltip">Tooltip</NuxtLink>
        </div>
      </div>
    </header>  -->

    <div class="">
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

body {
   font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
  color: rgb(71 85 105);
  overflow-x: hidden;
}

h1{
  font-family: "Titillium Web", sans-serif;
  font-weight: 900;
  font-style: normal;
}

h3{
  font-family: "Titillium Web", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.clamp-word{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; 
}
</style>