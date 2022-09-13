<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'

useHead(() => ({
  title: 'LRS Login',
  meta: [{ name: 'description', content: 'My App' }],
}))
useScriptTag(
  'https://book.mylimobiz.com/v4/widgets/widget-loader.js',
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    console.log('script loaded')
  }
)
</script>

<template>
  <div class="h-screen p-6">
    <div
      class="w-full max-w-xl h-full flex flex-row flex-wrap mx-auto justify-center content-center"
    >
      <h1 class="text-3xl font-subheading uppercase text-center mb-4">Login</h1>
      <a
        href="https://book.mylimobiz.com/v4/luxridesvc/widget/login"
        data-ores-widget="login"
        data-ores-alias="luxridesvc"
        data-redirect-url="https://luxuryrideservice.info5767.workers.dev/login"
        class="uppercase block"
        >Login</a
      >
    </div>
  </div>
</template>
