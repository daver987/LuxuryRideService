<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fleet-layout',
  keepalive: true,
  layoutTransition: {
    appear: true,
    enterFromClass: 'opacity-0',
    enterActiveClass: 'duration-[500ms]',
    leaveToClass: 'opacity-0',
    leaveActiveClass: 'duration-[500ms]',
    mode: 'out-in',
  },
  pageTransition: {
    appear: true,
    enterFromClass: 'opacity-0',
    enterActiveClass: 'duration-[500ms]',
    leaveToClass: 'opacity-0',
    leaveActiveClass: 'duration-[500ms]',
    mode: 'out-in',
  },
})
</script>
