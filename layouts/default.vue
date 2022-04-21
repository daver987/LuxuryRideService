<template>
  <main>
    <slot />
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
<script setup lang='ts'></script>
