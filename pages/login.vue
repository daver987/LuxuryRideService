<script setup lang="ts">
useHead(() => ({
  title: 'LRS Login',
  meta: [{ name: 'description', content: 'My App' }],
  script: [{ src: 'https://book.mylimobiz.com/v4/luxridesvc/widget/login' }],
}))
</script>

<template>
  <div class="h-screen p-6">
    <div
      class="w-full max-w-xl h-full flex flex-col flex-wrap mx-auto justify-center content-center"
    >
      <h1 class="text-3xl font-subheading uppercase text-center mb-4">Login</h1>
      <a
        href="https://book.mylimobiz.com/v4/luxridesvc/widget/login"
        data-ores-widget="login"
        data-ores-alias="luxridesvc"
        data-redirect-url="http://localhost:3000/reservations"
        class="uppercase block"
        >Login</a
      >
    </div>
  </div>
</template>
