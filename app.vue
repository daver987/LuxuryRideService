<script setup lang="ts">
useHead({
  title: 'Toronto Car Service | Luxury Ride Service',
  meta: [
    {
      name: 'description',
      content:
        'Luxury Ride Service is a premier Toronto car service. Tour Services, Limousine services and airport transfers at affordable prices.',
    },
    {
      name: 'robots',
      content:
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      property: 'og:locale',
      content: 'en_CA',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Toronto Car Service | Luxury Ride Service',
    },
    {
      property: 'og:description',
      content:
        'Luxury Ride Service is a premier Toronto car service. Tour Services, Limousine services and airport transfers at affordable prices.',
    },
    {
      property: 'og:url',
      content: 'https://luxuryrideservice.com/',
    },
    {
      property: 'og:site_name',
      content: 'Luxury Ride Service | Toronto Car Service',
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
