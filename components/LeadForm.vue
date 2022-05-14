<template>
  <div :class="outer" class="w-full h-full relative z-100">
    <div :id="inner" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  outer: {
    type: String,
    default: 'lead_form_outer',
  },
  inner: {
    type: String,
    default: 'lead_form_inner',
  },
})
</script>
