<template>
  <div
    class="bg-center bg-cover bg-no-repeat h-screen px-6 lg:px-10 z-10 pt-20 overflow-hidden relative"
    style="background-image: url('/icons/gradient-background.svg')"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 place-items-center mb-6 lg:mb-0 max-w-7xl mx-auto"
    >
      <div class="col-span-1 px-4 pt-8 pb-4 space-y-4">
        <h1 class="heading text-white text-center md:text-left">
          {{ slide.heading }}
        </h1>
        <p class="subheading text-center md:text-left">
          {{ slide.subHeading }}
        </p>
        <nuxt-img
          :alt="slide.altText"
          :class="slide.style"
          :src="slide.image"
          class="h-full object-center object-cover w-full"
        />
      </div>
      <div class="col-span-1 flex flex-col place-content-center mx-auto w-full">
        <FormKit
          type="form"
          id="quote_form"
          form-class="bg-black p-5 border-1 border-gray-50 shadow-md"
          v-model="formData"
          :onSubmit="handleSubmit"
          submit-label="Check Prices and Availability"
          submit-class="$reset
          block
          align-center
          bg-red-600
          py-3
          px-5
          rounded-md
          text-sm
          text-white
          uppercase
          tracking-wider"
        >
          <QuoteForm />
        </FormKit>
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
const formData = ref({})
console.log(formData.value)
const handleSubmit = (e) => {
  console.log(e)
}
</script>
