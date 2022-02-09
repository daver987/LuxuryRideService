<template>
  <div class="bg-white overflow-hidden">
    <div class="py-5 px-4 sm:p-6">
      <div class="sm:flex md:flex-col">
        <div
          class="flex-shrink-0 mb-4 self-start sm:mr-4 sm:mb-0 md:mr-0 md:self-center"
        >
          <img :alt="altText" :src="`/icons/${image}.svg`" class="w-16" />
        </div>
        <div>
          <h2
            class="font-subheading mt-2 text-base text-primary tracking-widest uppercase md:text-center"
          >
            {{ title }}
          </h2>
          <p class="font-body mt-1 text-sm text-body md:text-center">
            {{ body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})
</script>
