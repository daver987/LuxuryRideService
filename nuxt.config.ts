// noinspection JSCheckFunctionSignatures,JSUnusedGlobalSymbols

import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  dev: false,
  meta: {
    title: 'Toronto Car Service | Luxury Ride Service',
    meta: [
      {
        name: 'description',
        content:
          'Luxury Ride Service is a premier car service in the Toronto Area. We offer luxury cars for hire, limousine services and airport transfers at affordable prices.',
      },
      {
        name: 'google-site-verification',
        content: 'vxHnCltMFx06rPY1w0vXooUDj8NjRfXmIHbOREMUxrQ',
      },
    ],
  },
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-windicss',
    '@unocss/nuxt',
  ],

  vueuse: {
    ssrHandlers: true,
  },
  css: ['@/assets/css/styles.css'],

  unocss: {
    icons: true,
    uno: true,
    attributify: true,
  },
  privateRuntimeConfig: {
    ZONE_ID: process.env.ZONE_ID,
    ACCOUNT_ID: process.env.ACCOUNT_ID,
  }
})
