<template>
  <div class="bg-primary flex h-16 justify-center">
    <p class="font-body text-xs text-center text-body-light self-center">
      {{ copyright }} {{ year }}
    </p>
  </div>
</template>
<script>
//write a function to get the current year using the composition api
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  props: {
    copyright: {
      type: String,
      default: '© LUXURY RIDE SERVICE - ALL RIGHTS RESERVED',
    },
  },
}
</script>
