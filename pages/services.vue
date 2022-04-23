<script setup lang="ts">
const { data: tours } = useFetch('/api/tours')
const { data: services } = useFetch('/api/service')
const headerInfo = {
  aboveHeading: 'WHAT WE OFFER YOU',
  heading: 'OUR SERVICES',
  image: 'background-image: url("/images/Toronto-City-Tour.jpg")',
  body: "Luxury Ride Service is here to help you get from place to place. It's our job to provide you with the means of transportation, and we won't stop until it's done right.",
}
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="bg-background">
    <Script
      src="https://lrs.addons.la/leads/new/forms/resize/expander.php"
      config="7"
      defer
    ></Script>
    <TheHeader
      :aboveHeading="headerInfo.aboveHeading"
      :body="headerInfo.body"
      :heading="headerInfo.heading"
      :image="headerInfo.image"
    />
    <section class="mt-6 md:mb-20 px-6">
      <div
        class="container mx-auto max-w-7xl bg-white shadow-xl mb-12 md:pb-4 pb-16"
      >
        <div
          class="bg-white mx-auto -mt-8 max-w-7xl py-6 z-20 relative overflow-hidden md:-mt-20 md:px-2 lg:grid lg:px-4 lg:grid-cols-7 lead_banner_outer"
        >
          <div
            class="flex pt-8 mt-8 mb-4 justify-center lg:col-span-2 lg:col-start-6 lg:row-start-1 lg:self-center"
          >
            <img
              alt="24/7"
              class="h-32 fill-primary w-32"
              src="/icons/24-hours.svg"
            />
          </div>
          <div class="p-4 lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h2 class="text-center mb-4 subheading lg:text-left">
              CHECK OUT OUR SERVICES
            </h2>
            <p class="text-body text-sm">
              Luxury Ride Service puts you or your business at the forefront of
              Toronto car service. For nearly a decade, we have maintained a
              fleet of new model vehicles. We have constantly upgraded to meet
              the Toronto GTA car service market demands. ensuring that our
              clients receive only the very best chauffeur service available in
              Toronto. Our car service includes the safe and reliable Cadillac
              XTS, Lincoln Navigator, Cadillac Escalade, and Lincoln
              Continental. Our drivers are thoroughly trained to provide the
              highest level of service for even the most discriminating
              clientele. As a full-service transportation company, we have a
              wide range of vehicles available to accommodate any need.
            </p>
          </div>
        </div>
        <h3 class="text-center text-2xl md:text-3xl mb-6 text-primary">
          Get An Online Quote Today
        </h3>
        <div id="lead_banner" class="w-full md:px-6 bg-white"></div>
      </div>
    </section>
    <section class="mb-8 mt-12 md:mt-0 px-6">
      <div class="container mx-auto max-w-7xl md:grid md:gap-4 md:grid-cols-2">
        <div
          :class="service.boxPosition"
          v-for="service in services"
          :key="service.title"
        >
          <div :class="service.imagePosition">
            <img
              :alt="service.altText"
              :src="service.image"
              class="object-cover object-center"
            />
          </div>
          <div :class="service.infoPosition" class="flex">
            <div
              :class="service.infoBoxPosition"
              class="space-y-4 py-7 px-5 md:py-12 md:px-10"
            >
              <h2 class="subheading">{{ service.aboveHeading }}</h2>
              <h2 class="mt-4 text-4xl heading">{{ service.title }}</h2>
              <p class="mt-2 text-body text-sm mb-8">{{ service.body }}</p>
              <BaseButton
                class="mt-4"
                kind="btn-primary"
                label="Contact Us"
                to="/contact"
                :nuxtLink="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-background mb-8">
      <div
        class="bg-center bg-no-repeat bg-cover py-8 px-6 z-10 relative sm:px-8 md:py-16 lg:py-20"
        style="background-image: url('/images/Niagara-Falls-Tour.jpg')"
      >
        <h2 class="text-center subheading">Luxury Ride Service Tours</h2>
        <h2 class="mt-2 text-center text-heading-light text-4xl heading">
          Tour Services Available
        </h2>
      </div>
      <div class="bg-background px-6">
        <div
          class="bg-white mx-auto shadow-xl -mt-6 max-w-4xl grid pt-4 z-20 grid-cols-1 relative place-items-center md:-mt-12 md:px-6 md:pb-4 lg:max-w-7xl lg:grid-cols-2"
        >
          <IconBlockServices
            v-for="tour in tours"
            :key="tour.title"
            :alt-text="tour.altText"
            :body="tour.body"
            :image="tour.image"
            :title="tour.title"
          />
        </div>
      </div>
    </section>
  </div>
</template>
