<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  classes?: string
}

const props = withDefaults(defineProps<Props>(), {
  classes: 'mx-auto max-w-7xl px-4 w-full',
})
</script>
