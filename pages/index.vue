<script setup lang="ts">
const { data: services } = useFetch('/api/services')
const { data: iconBlock } = useFetch('/api/features')
const { data: logos } = useFetch('/api/logos')
const { data: info } = useFetch('/api/company-info')
const fleetImage =
  'background-image: url("/images/Cadillac-XTS-Interior-Car-Service.jpg")'

definePageMeta({
  layout: 'default',
  // pageTransition: {
  //   appear: true,
  //   enterFromClass: 'opacity-0 translate-x-10',
  //   enterActiveClass: 'duration-[2000ms]',
  //   leaveToClass: 'opacity-0 translate-x-10',
  //   leaveActiveClass: 'duration-[2000ms]',
  //   mode: 'out-in',
  // },
})
</script>

<template>
  <div>
    <Script
      src="https://lrs.addons.la/leads/new/forms/resize/expander.php"
      config="6"
    ></Script>
    <HeroSlider />
    <section class="bg-background mb-16 px-6">
      <div
        class="bg-white mx-auto shadow-xl -mt-16 max-w-4xl grid py-4 z-20 grid-cols-1 relative md:py-8 md:grid-cols-2 lg:max-w-7xl lg:grid-cols-4"
      >
        <IconBlockAbout
          v-for="iconBlocks in iconBlock"
          :key="iconBlocks.title"
          :altText="iconBlocks.altText"
          :body="iconBlocks.body"
          :image="iconBlocks.image"
          :title="iconBlocks.title"
        />
      </div>
    </section>
    <section class="mb-8">
      <div
        class="bg-center bg-no-repeat bg-cover px-8 pt-12 pb-24"
        :style="fleetImage"
      >
        <div
          class="container mx-auto flex flex-col space-y-4 max-w-7xl justify-between place-items-center lg:flex-row"
        >
          <div class="space-y-4">
            <p class="text-center subheading lg:text-left">
              The Many Types of Comfort We offer
            </p>
            <h2 class="text-center text-white capitalize heading lg:text-left">
              Our Fleet
            </h2>
          </div>
          <div>
            <BaseButton
              kind="btn-light"
              label="View All"
              :nuxtLink="true"
              to="/fleet/cadillac-xts"
            />
          </div>
        </div>
      </div>
      <div class="px-6">
        <div
          class="bg-white space-y-2 shadow-xl -mt-16 max-w-7xl pb-4 px-6 md:mx-auto overflow-hidden lead_banner_outer"
        >
          <p class="font-body text-sm text-body pt-8">
            <span class="font-bold font-body text-sm text-heading uppercase">{{
              info.companyName
            }}</span>
            puts you or your business at the forefront of Toronto car service.
            For nearly a decade, we have maintained a fleet of new model
            vehicles. We have constantly upgraded to meet the Toronto GTA car
            service market demands. We are ensuring that our clients receive
            only the very best chauffeur service available in Toronto, Canada.
            Our car service includes the safe and reliable Cadillac XTS, Lincoln
            Navigator SUV, Cadillac Escalade SUV, and Lincoln Continental. Our
            thoroughly trained drivers provide the highest level of service for
            even the most discriminating clientele. As a full-service
            transportation company, we have a wide range of vehicles available
            to accommodate any need.
          </p>
          <p class="font-body text-sm text-primary pb-4">
            Special requests are available for Specialty 6+ person vehicles that
            can take larger tour groups. Contact us to learn about the various
            options available from our limo service.
          </p>
          <h3 class="text-center text-3xl pb-4 text-primary">
            Get An Online Quote Today
          </h3>
          <div id="lead_banner" class="w-full bg-white overflow-hidden"></div>
        </div>
      </div>
    </section>
    <section class="bg-background p-6">
      <div
        class="flex flex-col mx-auto mb-8 max-w-4xl md:flex-none md:mb-4 md:grid md:grid-cols-2 md:grid-rows-1 md:items-stretch lg:max-w-7xl"
      >
        <IconBlockFleet
          heading="Cadillac XTS"
          class="order-1 md:order-first md:w-full md:col-span-1 md:col-start-1 md:self-center"
        />
        <IconBlockFleetImage
          altText="XTS Interior"
          image="/images/cadillac-xts-interior-home.jpg"
          class="md:col-span-1 md:col-start-2"
        />
      </div>
      <div
        class="flex flex-col mx-auto max-w-4xl gap-x-2 items-stretch md:flex-none md:grid md:grid-cols-2 lg:max-w-7xl"
      >
        <IconBlockFleet
          class="order-2 mb-8 w-full md:mb-4 md:max-w-[80%] md:col-span-1 md:col-start-1 md:row-start-2 md:justify-self-end"
          heading="Cadillac Escalade"
        />
        <IconBlockFleetImage
          altText="Escalade Interior"
          class="order-1 md:mb-0 md:col-span-1 md:col-start-1 md:row-start-1 md:row-end-2 md:self-end"
          image="/images/Escalade-Interior-Car-Service.jpg"
        />
        <IconBlockFleet
          class="order-4 w-full md:order-first md:max-w-[80%] md:pb-8 md:place-self-end md:justify-self-end"
          heading="Lincoln Continental"
        />
        <IconBlockFleetImage
          altText="Continental Interior"
          class="order-3 md:-mt-8 md:col-start-2 md:row-start-2"
          image="/images/Lincoln-Continental-Interior-Car-Service.jpg"
        />
      </div>
    </section>
    <section class="bg-background p-6">
      <img
        alt="Toronto Skyline"
        class="object-cover object-center lg:mx-auto lg:-mb-20 lg:max-w-6xl"
        src="/images/Toronto-Skyline-2.jpg"
        width="1364"
        height="459"
      />
      <div
        class="bg-white mx-auto space-y-4 shadow-xl max-w-7xl p-8 lg:p-x-8 lg:pt-32 lg:pb-8"
      >
        <p class="text-center subheading uppercase">
          WHAT {{ info.companyName }} OFFERS YOU
        </p>
        <h2 class="text-center heading text-heading">We Offer</h2>
      </div>
      <div
        class="bg-white mx-auto shadow-xl max-w-4xl grid z-10 grid-cols-1 relative place-items-center md:px-6 md:pb-8 lg:max-w-7xl lg:grid-cols-2"
      >
        <IconBlockServices
          v-for="service in services"
          :key="service.title"
          :alt-text="service.altText"
          :body="service.body"
          :image="service.image"
          :title="service.title"
        />
      </div>
    </section>
    <section class="bg-background py-8 px-6 md:py-20">
      <div class="space-y-8">
        <p class="text-center uppercase subheading">
          {{ info.companyName }} PARTNERS
        </p>
        <h2 class="text-center text-heading heading">They Trust Us</h2>
      </div>
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div class="grid gap-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-5">
          <div
            class="flex col-span-1 justify-center md:col-span-2 lg:col-span-1"
            v-for="logo in logos"
            :key="logo.id"
          >
            <TheLogoCloud
              :src="logo.src"
              :alt-text="logo.altText"
              :width="logo.width"
              :height="logo.height"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
