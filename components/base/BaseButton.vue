<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :href="href"
    :to="to"
    @click="$emit('click')"
    :class="kind"
    class="btn focus:border-primary focus:ring focus:ring-primary active:bg-primary/70"
  >
    {{ label }}
    <slot></slot>
  </component>
</template>

<script setup>
defineProps({
  kind: {
    type: String,
    required: false,
    default: 'btn-light',
  },
  label: {
    type: String,
    required: false,
    default: 'Button',
  },
  to: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
})
</script>
