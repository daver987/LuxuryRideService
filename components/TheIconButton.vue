<template>
  <BaseButton
    class="border border-transparent font-subheading text-sm text-primary py-2 px-3 leading-4 inline-flex items-center focus:outline-none focus:ring-primary focus:ring-2 focus:ring-offset-2"
    type="button"
    to="/fleet"
  >
    <img alt="right arrow" class="mr-6" src="/icons/right-arrow.svg" />
    <slot></slot>
  </BaseButton>
</template>
