<template>
  <div class="w-full">
    <label v-show="showLabel" :for="name" class="label"
      ><span class="label-text">{{ label }}</span></label
    >
    <div class="relative max-w-lg">
      <input
        :name="name"
        :id="id"
        :type="type"
        class="w-full rounded-none input input-md input-bordered placeholder-gray-500"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target)"
      />
    </div>
    <span v-show="validation" class="label-text text-error">
      {{ validationErrorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  showLabel: {
    type: Boolean,
    default: false,
  },
  validation: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  validationErrorMessage: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: false,
  },
})
defineEmits(['update:modelValue'])
</script>
