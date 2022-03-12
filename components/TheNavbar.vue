<template>
  <div
    class="-mb-[5.05rem] w-full px-6 z-30 row-start-1 self-start justify-self-stretch relative md:col-span-2"
  >
    <nav class="mx-auto max-w-7xl grid pt-6 grid-cols-2 relative">
      <div class="col-span-1 col-start-1">
        <NuxtLink to="/" class="max-w-[200px] block">
          <img
            src="/images/Luxury-Ride-Service-Logo.png"
            alt="Luxury-Ride-Service"
            width="1944"
            height="544"
          />
        </NuxtLink>
      </div>
      <div
        class="flex flex-row col-span-1 col-start-2 col-end-3 self-center justify-end"
      >
        <div
          class="cursor-pointer text-white text-4xl i-gg-menu-right-alt hover:text-background"
          @click="store.toggleMenu"
        />
        <span class="sr-only">Open main menu</span>
      </div>
      <LazySlideOutMenu />
    </nav>
  </div>
</template>

<script setup>
import { useMenu } from '~~/stores/useMenu'
const store = useMenu()
</script>
