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
              <NuxtLink to="/contact">
                <BaseButton
                  class="mt-4"
                  kind="btn-primary"
                  label="Contact Us"
                />
              </NuxtLink>
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
const headerInfo = {
  aboveHeading: 'WHAT WE OFFER YOU',
  heading: 'OUR SERVICES',
  image: 'background-image: url("/images/Toronto-City-Tour.jpg")',
  body: "Luxury Ride Service is here to help you get from place to place. It's our job to provide you with the means of transportation, and we won't stop until it's done right.",
}

const tours = [
  {
    title: 'Niagara Falls',
    body: 'Niagara Falls is home to one of the most majestic and awe-inspiring sites in the world. The falls are a spectacle of beauty that shakes the earth with their roar. Anyone who visits Toronto should take the time to explore all that this fantastic site has to offer. We can help you get there.',
    image: 'niagara-falls',
    altText: 'Niagara-Falls',
  },
  {
    title: 'Niagara Winery Tour',
    body: 'For those who are looking for an incredible day, we offer wine tours in Niagara. We have worked with some ofthe best wineries in the region and provide exclusive tours that offer one-of-a-kind experiences and memories.',
    image: 'Night-On-The-Town',
    altText: 'Niagara-Wine-Tour',
  },
  {
    title: 'Toronto city tour',
    body: 'For anyone who is looking for more than just the typical ride, we offer Toronto city tours. When you take a tour with us, you will be sure to see all the best attractions and landmarks that Toronto has to offer.',
    image: 'toronto',
    altText: 'Toronto=Tours',
  },
  {
    title: 'custom tours',
    body: ' If you are looking for a more intimate experience, we can create a custom tour for your group or family. Whether it is a bachelor party, bachelorette party, or any other special occasion, we offer transportation for all of these occasions and more',
    image: 'intercity-travel-1',
    altText: 'Custom-Tour-Services',
  },
]

const services = [
  {
    title: 'Airport Services',
    aboveHeading: 'TRAVEL IN COMFORT',
    body: 'No one wants to spend hours in an airport before their flight, but it is inevitable. With a limousine service, you do not need to worry about the time spent at the airport. Drivers are available 24/7 and can pick you up at any terminal. They will also drop you off at your terminal for your departure flight. When flying internationally, the process can be even more daunting with all of the security checks and hours of waiting in line. You will not have to worry about this as long as you are booked with a Luxury Ride Service!',
    image: '/images/Airplane-Toronto-Pearson-Airport.jpg',
    altText: 'Airport-Service',
    boxPosition: 'md:col-span-2 md:grid md:grid-cols-2 mb-8',
    imagePosition: 'md:col-span-1 md:col-start-2 md:self-center',
    infoPosition: 'md:col-span-1 md:col-start-1 md:row-start-1',
    infoBoxPosition: 'bg-white shadow-xl self-center',
  },
  {
    title: 'POINT TO POINT',
    aboveHeading: 'ALWAYS BE ON TIME',
    body: 'Point-to-point transfers are an excellent choice for anyone who wants more convenience when it comes to transportation. Many people rely on our company, and we work hard to provide them with a solution that matches up with their needs at all times. We will take care of every one of your needs and make sure that you are happy with what you get.',
    image: '/images/Point-To-Point-Service.jpg',
    altText: 'Point-To-Point',
    boxPosition: 'md:col-span-2 md:grid md:grid-cols-2 mb-8',
    imagePosition: 'md:col-span-1 md:col-start-1 md:self-center',
    infoPosition: 'md:col-span-1 md:col-start-2 row-start-1',
    infoBoxPosition: 'bg-white shadow-xl self-center',
  },
  {
    title: 'NIGHT ON THE TOWN',
    aboveHeading: 'ENJOY YOURSELF',
    body: 'Whether it is a birthday, bachelor party, bachelorette party or any other special occasion, we offer transportation for all of these occasions and more. Our drivers have experience catering to those who are celebrating milestones in their lives. Not only will they go out of their way to make sure you have a great time, but they will also help to ensure that you are safe too!',
    image: '/images/Night-On-The-Town-Toronto.jpg',
    boxPosition:
      'md:col-span-1 md:col-start-1 row-start-3 md:grid md:grid-cols-1 mb-8',
    imagePosition: 'md:col-span-1 md:row-start-1 md:max-w-md md:mx-auto',
    infoPosition: 'md:self-stretch md:col-span-1 md:row-start-2',
    infoBoxPosition:
      'bg-white shadow-xl px-4 py-6 md:px-6 lg:px-8 md:mx-2 md:pt-16 md:-mt-16',
  },
  {
    title: 'HOURLY SERVICE',
    aboveHeading: 'HAVE THE DRIVER WAIT',
    body: 'We offer hourly service with a minimum of two hours. Hourly car service is perfect for running errands, going to appointments, or even giving friends and family rides. Hourly service is also excellent for date nights and parties! Suppose you are unsure about what your transportation needs are. In that case, we offer packages that include everything you need to make it convenient.',
    image: '/images/Hourly-Car-Service.jpg',
    altText: 'Hourly-Service',
    boxPosition:
      'md:col-span-1 md:col-start-2 md:row-start-3 md:grid md:grid-cols-1 mb-8',
    imagePosition: 'md:col-span-1 md:row-start-1 md:max-w-md md:mx-auto',
    infoPosition: 'md:col-span-1 md:row-start-2',
    infoBoxPosition:
      'bg-white shadow-xl px-4 py-6 md:px-6 lg:px-8 md:mx-2 md:pt-16 md:-mt-16',
  },
  {
    title: 'CORPORATE TRAVEL',
    aboveHeading: 'DONT WORRY ABOUT MEETINGS',
    body: 'When you require a corporate car service, we offer the solution. We understand how crucial it is for those who work in the business world to be on time and prepared for meetings. Our drivers have years of experience and can adapt to any situation. They will also go out of their way to accommodate your needs, making the experience a great one!',
    image: '/images/Corporate-Travel-Car-Service.jpg',
    altText: 'Corporate-Travel',
    boxPosition: 'md:col-span-2 md:grid md:grid-cols-2 mb-8',
    imagePosition: 'md:col-span-1 md:col-start-2 md:self-center',
    infoPosition: 'md:col-span-1 md:col-start-1 md:row-start-1',
    infoBoxPosition: 'bg-white shadow-xl self-center',
  },
  {
    title: 'INTERCITY TRAVEL',
    aboveHeading: 'AVOID THE HASSLE',
    body: 'Intercity travel is a service that we offer for customers looking to get from point A to point B in the shortest possible time. If you are looking for an alternative to trains, planes, and buses, this will be an excellent solution. We take care of every single detail so that you can enjoy your trip. You will get a professional driver, freshly stocked beverages, and you will enjoy our luxurious atmosphere',
    image: '/images/Intercity-Travel-Car-Service.jpg',
    altText: 'Intercity-Travel',
    boxPosition: 'md:col-span-2 md:grid md:grid-cols-2 mb-8',
    imagePosition: 'md:col-span-1 md:col-start-1 md:self-center',
    infoPosition: 'md:col-span-1 md:col-start-2 row-start-1',
    infoBoxPosition: 'bg-white shadow-xl self-center',
  },
]
</script>
