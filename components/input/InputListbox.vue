<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

defineProps({
  options: {
    type: Object,
    required: true,
    default(rawProps) {
      return [{ id: 0, name: '' }]
    },
  },
  modelValue: {
    type: Object,
    default(rawProps) {
      return [{ id: 0, name: '' }]
    },
  },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Listbox
    :modelValue="modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
  >
    <div class="relative mt-1">
      <ListboxButton
        class="w-full cursor-default rounded-none bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm"
      >
        <span class="block truncate">{{ modelValue.name }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <ListboxOptions
          as="div"
          class="absolute z-50 mt-1 max-h-72 w-full overflow-auto rounded-none bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option.name"
            :value="option"
            as="template"
          >
            <div
              :class="[
                active ? 'bg-primary text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ option.name }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary bg-white"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
