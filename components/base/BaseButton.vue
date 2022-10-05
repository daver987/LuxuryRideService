<template>
  <component
    :class="btnStyle"
    :is="btnType"
    :href="href"
    :to="to"
    @click="$emit('clicked')"
  >
    <span class="mx-auto">{{ label }}</span>
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
interface Props {
  kind?: string
  label?: string
  to?: string
  href?: string
  nuxtLink?: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'clicked'): void
}>()
emit('clicked')

const btnType = computed(() => {
  return props.href ? 'a' : props.nuxtLink ? 'router-link' : 'button';
})

const btnStyle = computed(() => {
  switch (props.kind) {
    case 'btn-light':
      return [
        'inline-flex items-center cursor-pointer border border-solid border-white font-extralight text-white text-base py-2 px-5 tracking-[0.4em] uppercase hover:border-primary hover:text-primary hover:transform hover:transition hover:ease-in-out hover:scale-x-105 hover:-translate-y-1 hover:duration-300 active:bg-primary/20 focus:border-primary focus:ring focus:ring-primary',
      ]
  }
  switch (props.kind) {
    case 'btn-primary':
      return [
        'inline-flex items-center cursor-pointer border border-solid border-primary font-extralight text-primary text-base py-2 px-5 tracking-[0.4em] uppercase hover:border-primary hover:text-primary hover:transform hover:transition hover:ease-in-out hover:scale-x-105 hover:-translate-y-1 hover:duration-300 active:bg-primary/20 focus:border-primary focus:ring focus:ring-primary',
      ]
  }

  switch (props.kind) {
    case 'btn-dark':
      return [
        'inline-flex items-center cursor-pointer border border-solid border-heading font-extralight text-heading text-base py-2 px-5 tracking-[0.4em] uppercase hover:border-primary hover:text-primary hover:transform hover:transition hover:ease-in-out hover:scale-x-105 hover:-translate-y-1 hover:duration-300 active:bg-primary/20 focus:border-primary focus:ring focus:ring-primary',
      ]
  }
  switch (props.kind) {
    case 'btn-flat':
      return [
        'inline-flex items-center cursor-pointer border-0 text-primary font-extralight text-base py-2 px-5 tracking-[0.4em] uppercase hover:border-primary hover:text-primary hover:transform hover:transition hover:ease-in-out hover:scale-x-105 hover:-translate-y-1 hover:duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary active:bg-primary/20 active:outline-none',
      ]
  }
  switch (props.kind) {
    case 'btn-solid':
      return [
        'inline-flex text-center cursor-pointer bg-primary border border-solid border-primary font-extralight text-background-dark text-sm py-4 px-4 w-full tracking-[0.4em] uppercase hover:border-primary hover:text-background-dark hover:transform-none hover:transition-none active:bg-primary/50 focus:border-primary focus:ring focus:ring-primary',
      ]
  }
  return [
    'inline-flex items-center cursor-pointer border border-solid border-white text-white text-base py-2 px-5 tracking-[0.4em] uppercase hover:border-primary hover:text-primary hover:transform hover:transition hover:ease-in-out hover:scale-x-105 hover:-translate-y-1 hover:duration-300 active:bg-primary/20 focus:border-primary focus:ring focus:ring-primary',
  ]
})
</script>
