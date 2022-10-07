<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox
    :modelValue="modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
    by="id"
  >
    <ListboxLabel
      v-if="showLabel"
      class="block text-sm font-medium text-gray-700"
      >{{ label }}</ListboxLabel
    >
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 shadow-sm cursor-default focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
      >
        <span class="block truncate">{{ name }} </span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <ChevronUpDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="option in options"
            :key="option.id"
            :value="option"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-primary' : 'text-gray-900',
                'relative cursor-default select-none p-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
                >{{ option.name }}</span
              >

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-primary',
                  'absolute inset-y-0 left-0 flex items-center pl-1.5',
                ]"
              >
                <CheckIcon class="w-5 h-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

interface Props {
  modelValue: any
  options: any[]
  label: string
  showLabel: boolean
}

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    default: () => [{ id: 0, name: 'Choose Service Type' }],
  },
  options: {
    type: Object,
    required: false,
    default: () => [
      { id: 0, name: 'Choose Service Type' },
      { id: 1, name: 'Point-To-Point' },
      { id: 2, name: 'To Airport' },
      { id: 3, name: 'From Airport' },
      { id: 4, name: 'Hourly/As-Directed' },
    ],
  },
  label: {
    type: String,
    required: false,
    default: 'This is a Label',
  },
  showLabel: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

// const props = withDefaults(defineProps<Props>(), {
//   options: () => [
//     { id: 0, name: 'Choose Service Type' },
//     { id: 1, name: 'Point-To-Point' },
//     { id: 2, name: 'To Airport' },
//     { id: 3, name: 'From Airport' },
//     { id: 4, name: 'Hourly/As-Directed' }
//   ],
//   // label: () => 'This is a Label',
//   selectedName: () => 'select_name',
//   modelValue: () => [{ id: 0, name: 'Choose Service Type' }],
//   showLabel: () => false
// })
// const emit = defineEmits(['update:modelValue'])
// const selectedOption = ref(props.options[0])
// const selectedName = () => props.selectedName
</script>
