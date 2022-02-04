<template>
  <button :class="kind" class="btn focus:border-primary focus:ring focus:ring-primary active:bg-primary/70">
    {{ label }}
    <slot></slot>
  </button>
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
})
</script>
