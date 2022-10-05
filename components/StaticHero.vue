<template>
  <div
    class="relative z-10 h-screen px-6 pt-20 overflow-hidden bg-center bg-no-repeat bg-cover lg:px-10"
    style="background-image: url('/icons/gradient-background.svg')"
  >
    <div
      class="grid grid-cols-1 mx-auto mb-6 lg:grid-cols-2 place-items-center lg:mb-0 max-w-7xl"
    >
      <div class="col-span-1 px-4 pt-8 pb-4 space-y-4">
        <h1 class="text-center text-white heading md:text-left">
          {{ slide.heading }}
        </h1>
        <p class="text-center subheading md:text-left">
          {{ slide.subHeading }}
        </p>
        <nuxt-img
          :alt="slide.altText"
          :class="slide.style"
          :src="slide.image"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div class="flex flex-col w-full col-span-1 mx-auto place-content-center">
        <div class="p-6 bg-black border border-white rounded-lg shadow-xl">
          <FormKit
            type="form"
            id="lrs-quote-form"
            :actions="false"
            name="lrs-quote-form"
            #default="{ value }"
          >
            <QuoteForm />
            <pre wrap>{{ value }}</pre>
          </FormKit>
        </div>
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
const handleSubmit = (e: any) => {
  console.log(e)
}
</script>
