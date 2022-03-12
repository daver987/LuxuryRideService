<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="flex inset-0 z-40 fixed"
        @close="open = false"
        :open="open"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="bg-black bg-opacity-75 inset-0 fixed" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-500 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-500 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="bg-background-dark flex flex-col max-w-sm shadow-xl w-full pb-12 relative overflow-y-auto md:max-w-lg"
          >
            <div class="flex px-4 pt-5 pb-4">
              <button
                type="button"
                class="rounded-md -m-2 p-2 text-gray-400 inline-flex items-center justify-center"
                @click="open = false"
              >
                <span class="sr-only">Close menu</span>
                <div
                  class="text-primary text-4xl i-mdi-window-close"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div class="border-t space-y-6 border-gray-200 py-6 px-4">
              <div class="flow-root">
                <NuxtLink
                  class="font-medium -m-2 text-white tracking-widest p-2 text-2xl block uppercase"
                  v-for="nav in navigation"
                  :to="nav.href"
                  :key="nav.name"
                  @click="open = false"
                  >{{ nav.name }}
                </NuxtLink>
              </div>
              <div class="flow-root">
                <BaseButton
                  class="my-3 self-center"
                  kind="btn-light"
                  label="Reserve"
                  to="/reservations"
                  @click="open = false"
                  :nuxtLink="true"
                />
              </div>
            </div>

            <div class="border-t space-y-6 border-gray-200 py-6 px-4" />
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import {
  TransitionChild,
  TransitionRoot,
  DialogOverlay,
  Dialog,
} from '@headlessui/vue'
import { storeToRefs } from 'pinia'
import { useNavigation } from '~~/composables/useNavigation'
import { useMenu } from '~~/stores/useMenu'

const store = useMenu()
const { open } = storeToRefs(store)

const navigation = useNavigation()
</script>

<style scoped>
.router-link-active {
  color: rgba(187, 136, 15);
}
</style>
