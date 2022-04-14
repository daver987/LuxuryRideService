import { setActivePinia, createPinia } from 'pinia'
import { menuStore } from '../menuStore'
import { beforeEach, describe, expect, it } from 'vitest'

describe('menuStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should toggle the value of open', () => {
    const store = menuStore()
    expect(store.open).toBe(false)
    store.toggleMenu()
    expect(store.open).toBe(true)
    store.toggleMenu()
    expect(store.open).toBe(false)
  })
})
