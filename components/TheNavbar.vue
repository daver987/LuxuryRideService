<template>
  <div
    class="-mb-[6.3rem] w-full px-6 z-30 row-start-1 self-start justify-self-stretch relative md:col-span-2"
  >
    <nav class="mx-auto max-w-7xl grid pt-6 grid-cols-2 relative">
      <div class="col-span-1 col-start-1">
        <nuxt-link to="/" class="max-w-[130px] block">
          <img
            src="/images/HPL-Logo-White-2.png"
            alt="High-Park-Livery"
            width="960"
            height="568"
          />
        </nuxt-link>
      </div>
      <div
        class="flex flex-row col-span-1 col-start-2 col-end-3 self-center justify-end"
      >
        <button
          class="cursor-pointer text-white text-4xl i-gg-menu-right-alt hover:text-background"
          @click="toggleMenu"
        />
        <span class="sr-only">Open main menu</span>
      </div>
      <SlideOutMenu />
    </nav>
  </div>
</template>

<script setup lang="ts">
const isOpen = useOpen()
function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
