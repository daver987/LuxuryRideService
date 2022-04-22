<template>
  <div
    class="container bg-background-light flex flex-col mx-auto space-y-4 shadow-xl -mb-28 max-w-7xl py-10 px-8 z-10 relative lg:flex-row lg:space-y-0 lg:-mb-12 lg:justify-between"
  >
    <div class="lg:self-center">
      <h2 class="text-center heading lg:text-4xl">
        interested in our services?
      </h2>
    </div>
    <div class="self-center">
      <BaseButton
        kind="btn-dark"
        label="Reserve Now"
        to="/reservations"
        :nuxtLink="true"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterCta',
}
</script>
