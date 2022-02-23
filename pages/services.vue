<template>
  <div>
    <TheHeader
      :aboveHeading="headerInfo.aboveHeading"
      :body="headerInfo.body"
      :heading="headerInfo.heading"
      :image="headerInfo.image"
    />
    <section class="mb-8 px-6">
      <div class="container max-w-7xl">
        <div
          class="bg-white mx-auto shadow-xl -mt-12 max-w-7xl py-6 z-20 relative overflow-hidden md:-mt-16 md:px-2 lg:grid lg:px-4 lg:grid-cols-7"
        >
          <div
            class="flex mt-8 mb-4 justify-center lg:col-span-2 lg:col-start-6 lg:row-start-1 lg:self-center"
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
            <p>
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
      </div>
    </section>
    <section class="mb-8 px-6">
      <div class="container max-w-7xl md:grid md:grid-cols-2">
        <div
          :class="service.boxPosition"
          v-for="service in services"
          :key="service.title"
        >
          <div :class="service.imagePosition">
            <img
              :alt="service.altText"
              :src="service.image"
              class="object-cover"
            />
          </div>
          <div :class="service.infoPosition" class="flex">
            <div
              :class="service.infoBoxPosition"
              class="py-7 px-5 md:py-12 md:px-10"
            >
              <h2 class="subheading">{{ service.aboveHeading }}</h2>
              <h2 class="mt-4 text-4xl heading">{{ service.title }}</h2>
              <p class="mt-2">{{ service.body }}</p>
              <BaseButton
                class="mt-4"
                kind="btn-primary"
                label="Contact Us"
                to="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-8">
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

<script setup>
const { data: tours } = useFetch('/api/tours')
const { data: services } = useFetch('/api/service')
const headerInfo = {
  aboveHeading: 'WHAT WE OFFER YOU',
  heading: 'OUR SERVICES',
  image: 'background-image: url("/images/Toronto-City-Tour.jpg")',
  body: "Luxury Ride Service is here to help you get from place to place. It's our job to provide you with the means of transportation, and we won't stop until it's done right.",
}
</script>
