import { defineStore } from 'pinia'

export const useMenu = defineStore('menu', {
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
    closeMenu() {
      this.open = false
    },
  },
})
