import { VueTelInput } from 'vue-tel-input'

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  nuxtApp.vueApp.use(VueTelInput)
})
