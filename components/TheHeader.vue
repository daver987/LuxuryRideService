<template>
  <header
    class="relative z-10 h-screen overflow-hidden bg-cover bg-center bg-no-repeat px-6 md:px-12"
    style="background-image: url('/icons/gradient-background.svg')"
  >
    <BaseContainer
      class="relative grid h-full grid-cols-1 grid-rows-6 py-8 md:grid-cols-2"
    >
      <div
        :style="image"
        class="col-span-2 row-start-2 row-end-5 grid h-full w-full max-w-7xl grid-cols-1 bg-black bg-opacity-60 bg-cover bg-center bg-no-repeat bg-blend-darken md:row-end-6 md:grid-cols-2 md:self-center"
      >
        <div
          class="row-start-2 flex max-w-md flex-col px-6 space-y-6 md:max-w-xl md:justify-self-stretch md:px-12"
        >
          <p class="text-center subheading md:text-left">
            {{ aboveHeading }}
          </p>
          <h1 class="text-center leading-tight text-white heading md:text-left">
            {{ heading }}
          </h1>
          <p
            class="max-w-xs text-center text-sm tracking-wider text-white font-body md:max-w-sm md:text-left"
          >
            {{ body }}
          </p>
        </div>
      </div>
      <div
        class="tracking-wide pt-8 col-span-1 col-start-1 row-start-6 md:transform md:top-0 md:left-[-6.75rem] md:row-start-4 md:-rotate-90 md:absolute"
      >
        <a
          :href="`tel:${companyPhone}`"
          class="text-center text-sm font-body text-body"
          >CALL: {{ companyPhone }}</a
        >
      </div>
      <div
        class="pt-16 col-span-1 col-start-1 row-start-6 md:transform md:top-0 md:right-[-12.5rem] md:col-start-2 md:row-start-4 md:rotate-90 md:absolute"
      >
        <a
          :href="`mailto:${companyEmail}`"
          class="text-center text-sm uppercase tracking-wide font-body text-body"
        >
          EMAIL: {{ companyEmail }}
        </a>
      </div>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
defineProps({
  aboveHeading: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  companyPhone: {
    type: String,
    required: false,
    default: '289.640.1876',
  },
  companyEmail: {
    type: String,
    required: false,
    default: 'info@luxuryrideservice.com',
  },
})
</script>
