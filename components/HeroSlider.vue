<template>
  <Splide
    :options="options"
    style="background-image: url('/icons/gradient-background.svg')"
    class="bg-center bg-cover bg-no-repeat h-screen px-6 z-10 overflow-hidden relative slider-background"
  >
    <SplideSlide v-for="slide in slider" :key="slide.id">
      <div
        class="container h-full max-w-7xl grid py-8 grid-cols-1 grid-rows-6 place-items-center md:grid-rows-3 md:grid-cols-2"
      >
        <div
          class="flex flex-col max-w-md space-y-6 row-start-3 md:max-w-xl md:row-start-2 md:justify-self-stretch"
        >
          <h1 class="text-center leading-tight md:text-left" id="heading">
            {{ slide.heading }}
          </h1>
          <p class="text-center subheading md:text-left" id="subheading">
            {{ slide.subHeading }}
          </p>
          <BaseButton
            class="self-center md:self-start"
            cursor-pointer
            mt-8
            self-center
            md:self-start
            :label="slide.buttonText"
            kind="btn-light"
            to="/reservations"
          />
        </div>
        <div
          class="max-w-lg row-start-5 self-center md:col-start-2 md:row-start-2 lg:max-w-xl"
        >
          <img
            :src="slide.image"
            :alt="slide.altText"
            class="h-full object-fit object-cover w-full"
            :class="slide.style"
          />
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { Options } from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css'

const slider = useSlider()
const options: Options = {
  rewind: false,
  perPage: 1,
  gap: '1rem',
  height: '100vh',
  type: 'loop',
  autoplay: true,
  pauseOnHover: false,
  arrows: false,
  interval: 5000,
  speed: 750,
  cover: true,
  fixedHeight: '100vh',
}
</script>
