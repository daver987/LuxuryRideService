import { defineStore, acceptHMRUpdate } from 'pinia'

export const menuStore = defineStore('menu', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      open: false,
    }
  },

  actions: {
    toggleMenu() {
      this.open = !this.open
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(menuStore, import.meta.hot))
}
