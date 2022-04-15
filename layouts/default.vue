<template>
  <div class="bg-background">
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
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
<script setup lang='ts'>

</script>
`;
