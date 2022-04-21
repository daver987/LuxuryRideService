import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGtm({
    id: 'GTM-NTV3954',
  }))
})
