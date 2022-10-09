<script setup lang="ts">
import { Ref } from 'vue'

const isOpen = useOpen() as Ref<boolean>
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

defineProps({
  showMenuButton: {
    type: Boolean,
    default: true,
    required: false,
  },
})
</script>

<template>
  <nav
    class="-mb-[5.05rem] w-full px-6 lg:px-10 z-30 row-start-1 self-start justify-self-stretch relative md:col-span-2"
  >
    <div class="relative mx-auto grid max-w-7xl grid-cols-2 pt-6">
      <div class="col-span-1 col-start-1">
        <NuxtLink
          to="/"
          class="max-w-[175px] md:max-w-[200px] block cursor-pointer"
        >
          <img
            src="/images/Luxury-Ride-Service-Logo.png"
            alt="Luxury-Ride-Service"
            width="1944"
            height="544"
          />
        </NuxtLink>
      </div>
      <div
        class="col-span-1 col-start-2 col-end-3 flex flex-row justify-end self-center"
      >
        <button
          class="cursor-pointer text-4xl text-white i-gg-menu-right-alt hover:text-background"
          @click="toggleMenu"
          v-show="showMenuButton"
        />
        <span class="sr-only">Open main menu</span>
      </div>
      <SlideOutMenu />
    </div>
  </nav>
</template>
