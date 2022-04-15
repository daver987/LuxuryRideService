import { defineNuxtConfig } from 'nuxt3'
import { transformerDirectives } from 'unocss'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Toronto Car Service | High Park Livery',
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
          'High Park Livery a premier Toronto car service. Luxury cars for hire, Tour Services, Limousine services' +
          ' and airport transfers at affordable prices.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'canonical', href: 'https://highparklivery.com' },
    ],
  },
  buildModules: ['@vueuse/nuxt', '@unocss/nuxt'],

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
          DEFAULT: '#A57C52',
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
      body: 'bg-background',
      img: 'object-cover object-center',
      h1: 'font-heading text-heading-light text-4xl uppercase lg:text-5xl',
      h2: 'font-heading text-4xl uppercase md:text-2xl lg:text-4xl xl:text-5xl',
    },
  },

  css: ['@/assets/css/styles.css', '@unocss/reset/tailwind.css'],
})
