<template>
  <img :alt="altText" :src="image" class="md:object-center md:object-cover" />
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
})
</script>
