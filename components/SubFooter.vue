<template>
  <div class="bg-primary flex h-16 justify-center">
    <p class="font-body text-xs text-center text-body-light self-center">
      {{ copyright }} {{ getYear() }}
    </p>
  </div>
</template>
<script setup lang="ts">

// function that return's the current year
const getYear = () => new Date().getFullYear()

defineProps({
  copyright: {
    default: '© LUXURY RIDE SERVICE - ALL RIGHTS RESERVED',
  },
})

</script>
