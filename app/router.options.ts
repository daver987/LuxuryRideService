import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({left: 0, top: 0})
      }, 500)
    })
  },
}
