<template>
  <div
    class="bg-center bg-cover bg-no-repeat h-[150vh] md:h-screen px-6 z-10 pt-20 overflow-hidden relative"
    style="background-image: url('/icons/gradient-background.svg')"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full max-w-7xl mx-auto"
    >
      <div class="col-span-1 p-4 space-y-4">
        <h1 class="heading text-white">{{ slide.heading }}</h1>
        <p class="subheading">{{ slide.subHeading }}</p>
        <img
          :alt="slide.altText"
          :class="slide.style"
          :src="slide.image"
          class="h-full object-center object-cover w-full"
        />
      </div>
      <div class="col-span-1 md:pl-16">
        <LeadForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const slide = {
  heading: 'Experience Luxury Rides and Tours',
  subHeading: 'In Toronto',
  image: '/images/Cadillac-XTS-Car-Service.png',
  altText: 'Cadillac XTS Car Service',
  buttonText: 'Book Now',
  buttonLink: '/reservations',
  id: '1',
  style: 'transform rotate-y-180',
}
</script>
