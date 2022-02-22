import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  meta: {
    title: 'Toronto Car Service | Luxury Ride Service',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'description',
        content:
          'Luxury Ride Service a premier Toronto car service. Luxury cars for hire, Tour Services, Limousine services and airport transfers at affordable prices.',
      },
      {
        name: 'google-site-verification',
        content: 'vxHnCltMFx06rPY1w0vXooUDj8NjRfXmIHbOREMUxrQ',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://luxuryrideservice.com' },
    ],
  },
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-windicss',
    '@unocss/nuxt'
  ],

  unocss: {
    // presets
    icons: true, // enabled `@unocss/preset-icons`

  },

  vueuse: {
    ssrHandlers: true,
  },
  css: ['@/assets/css/styles.css'],


})
