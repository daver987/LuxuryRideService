<template>
  <section
    class="bg-center bg-cover bg-no-repeat h-screen px-6 z-10 overflow-hidden relative"
    style="background-image: url('/icons/gradient-background.svg')"
  >
    <div
      class="container h-full max-w-7xl grid py-8 grid-cols-1 grid-rows-6 relative md:grid-cols-2"
    >
      <div
        :style="image"
        class="bg-center bg-no-repeat bg-cover bg-black bg-blend-darken h-full bg-opacity-60 w-full max-w-7xl grid grid-cols-1 col-span-2 row-start-2 row-end-5 md:grid-cols-2 md:row-end-6 md:self-center"
      >
        <div
          class="flex flex-col max-w-md space-y-6 px-6 row-start-2 md:max-w-xl md:px-12 md:justify-self-stretch"
        >
          <p class="text-center subheading md:text-left">
            {{ aboveHeading }}
          </p>
          <h2 class="text-center text-white leading-tight md:text-left">
            {{ heading }}
          </h2>
          <p
            class="font-body max-w-xs text-sm text-center text-white tracking-wider md:max-w-sm md:text-left"
          >
            {{ body }}
          </p>
        </div>
      </div>
      <div
        class="tracking-wide pt-8 col-span-1 col-start-1 row-start-6 md:transform md:top-0 md:left-[-6.75rem] md:row-start-4 md:-rotate-90 md:absolute"
      >
        <a href="tel:2894009408" class="font-body text-sm text-center text-body"
          >CALL 289.400 .9408</a
        >
      </div>
      <div
        class="pt-16 col-span-1 col-start-1 row-start-6 md:transform md:top-0 md:right-[-12.5rem] md:col-start-2 md:row-start-4 md:rotate-90 md:absolute"
      >
        <a
          href="mailto:info@luxuryrideservice.com"
          class="font-body text-sm text-center text-body tracking-wide"
        >
          EMAIL: INFO@LUXURYRIDESERVICE.COM
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
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
})
</script>
