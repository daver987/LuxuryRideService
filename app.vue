<script setup lang="ts">
useHead({
  title: 'Toronto Car Service | Luxury Ride Service',
  meta: [
    {
      name: 'description',
      content:
        'Luxury Ride Service a premier Toronto car service. Luxury cars for hire, Tour Services, Limousine services and airport transfers at affordable prices.',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
    {
      rel: 'canonical',
      href: 'https://luxuryrideservice.com',
      crossorigin: true,
    },
  ],
})
</script>

<template>
  <div>
    <TheNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <TheFooter />
  </div>
</template>
