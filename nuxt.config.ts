/// <reference types="vitest" />
import { defineNuxtConfig } from 'nuxt3'
import { transformerDirectives } from 'unocss'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
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
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      {
        rel: 'canonical',
        href: 'https://luxuryrideservice.com',
        crossorigin: true,
      },
    ],
  },
  buildModules: ['@vueuse/nuxt', '@unocss/nuxt', '@formkit/nuxt'],


  unocss: {
    uno: true,
    icons: true,
    transformers: [transformerDirectives()],
    attributify: true,
    theme: {
      fontFamily: {
        sans: ['caviar-dreams'],
        subheading: ['caviar-dreams-bold'],
        heading: ['campton-thin'],
        body: ['campton-light'],
      },

      colors: {
        primary: {
          DEFAULT: '#BB880F',
        },
        background: {
          light: '#fff',
          DEFAULT: '#EBEBEB',
          dark: '#262626',
        },
        body: {
          light: '#fff',
          DEFAULT: '#AAAAAA',
        },
        heading: {
          light: '#fff',
          DEFAULT: '#2B2B2B',
        },
        icon: {
          DEFAULT: '#C0C0C0',
        },
      },
      container: {
        center: true,
      },
    },
    shortcuts: {
      subheading:
        'font-subheading text-primary text-xs leading-relaxed tracking-[0.5em] uppercase md:text-sm',
      heading: 'font-heading text-4xl text-heading uppercase lg:text-5xl',
    },
  },

  css: ['@/assets/css/styles.css', '@unocss/reset/tailwind.css'],
})
