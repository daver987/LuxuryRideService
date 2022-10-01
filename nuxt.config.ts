/// <reference types="vitest" />
import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

export default defineNuxtConfig({
  // typescript: {
  //   shim: false,
  // },
  experimental: {
    reactivityTransform: true,
  },
  ssr: false,

  nitro: {
    preset: 'cloudflare',
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    'nuxt-font-metrics',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@formkit/nuxt',
  ],

  runtimeConfig: {
    public: {
      MAPS_API_KEY: process.env.MAPS_API_KEY,
    },
  },

  build: {
    transpile: ['vue-tel-input'],
  },
  tailwindcss: {
    cssPath: 'assets/css/main.css',
  },
  css: [
    '@vuepic/vue-datepicker/dist/main.css',
    'vue-tel-input/dist/vue-tel-input.css',
    'assets/css/main.css',
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
})
