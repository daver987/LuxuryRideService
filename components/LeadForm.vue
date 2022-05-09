<template>
  <Script
    src="https://lrs.addons.la/leads/new/forms/resize/expander.php"
    :config="config"
  ></Script>
  <div class="lead_form_outer w-full h-full relative z-100">
    <div id="lead_form_inner" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  config: {
    type: Number,
    default: 9,
  },
})
</script>
