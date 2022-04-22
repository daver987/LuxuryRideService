<template>
  <img
    :alt="altText"
    class="object-contain w-full filter grayscale hover:grayscale-0"
    :src="src"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '/images/CFIB-Logo.png',
  },
  altText: {
    type: String,
    default: 'CFIB',
  },
  width: {
    type: Number,
    default: 1920,
  },
  height: {
    type: Number,
    default: 931,
  },
})
</script>
