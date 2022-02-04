<template>
  <div>
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
          class="container flex flex-col space-y-4 max-w-7xl justify-between place-items-center lg:flex-row"
        >
          <div class="space-y-4">
            <p class="text-center subheading lg:text-left">
              The Many Types of Comfort We offer
            </p>
            <h2 class="text-center text-heading-light capitalize lg:text-left">
              Our Fleet
            </h2>
          </div>
          <div>
            <NuxtLink to="/fleet">
              <BaseButton kind="btn-light" label="View All" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="px-6">
        <div
          class="bg-white space-y-2 shadow-xl -mt-16 max-w-7xl py-8 px-6 md:mx-auto md:px-16"
        >
          <p class="font-body text-sm text-body prose">
            <span class="font-bold font-body text-sm text-heading uppercase"
              >Luxury Ride Service</span
            >
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
          <p class="font-body text-sm text-primary prose">
            Special requests are available for Specialty 6+ person vehicles that
            can take larger tour groups. Contact us to learn about the various
            options available from our limo service.
          </p>
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
        <p class="text-center subheading">
          WHAT LUXURY RIDE SERVICE OFFERS YOU
        </p>
        <h2 class="text-center">We Offer</h2>
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
        <p class="text-center subheading">LUXURY RIDE SERVICE PARTNERS</p>
        <h2 class="text-center">They Trust Us</h2>
      </div>
      <TheLogoCloud />
    </section>
  </div>
</template>

<script setup>
const fleetImage =
  'background-image: url("/images/Cadillac-XTS-Interior-Car-Service.jpg")'

const iconBlock = [
  {
    title: 'PROFESSIONAL DRIVERS',
    body: "You deserve the best from a car service! That's why we always make sure you'll get an expert driver ready for your every need. The passengers' safety is of utmost priority. As one of the best Toronto car service companies in town, we ensure that our services to you or your business are safe and reliable.",
    image: 'chauffeur',
    altText: 'chauffeur',
  },
  {
    title: 'All Inclusive rates',
    body: "There's no need to worry about hidden fees when you reserve your car service with us. We will provide a safe and affordable means of transportation for everyone who books with our company. So they can arrive stress-free at Pearson International Airport (or any other location).  The customer always comes first, and every trip gets the attention it deserves, ensuring satisfaction throughout each journey.",
    image: 'credit-cards',
    altText: 'credit-cards',
  },
  {
    title: 'book ahead',
    body: "If you're planning on taking a trip to Toronto, Ontario, use our booking software online to book your Toronto car service in advance. This way, you can ensure that your car and driver are at the airport waiting to take you to your destination.",
    image: 'calendar',
    altText: 'calendar icon',
  },
  {
    title: 'Complimentary Wait Time',
    body: "Can't wait to get picked up on your journey from the Toronto airport? Don't worry; we've got it covered! As one of the premier Toronto car service companies, we make sure that we monitor your flight and that your driver is on location when you land. So you can focus on the things that are important to you and not if your ride will be there waiting.",
    image: 'time',
    altText: 'clock icon',
  },
]

const services = [
  {
    title: 'TORONTO TOURS',
    body: 'Get a tour of the city of Toronto with a car service for an unforgettable experience. Toronto is the most culturally diverse city in Canada. Customer satisfaction and the safety of our clients are our number one priority! Along the way, your driver can stop at your favourite landmarks and take pictures to make your visit to Toronto more memorable.',
    image: 'toronto',
    altText: 'Toronto-City-Tour',
  },
  {
    title: 'NIGHT ON THE TOWN',
    body: "We are a VIP Toronto car service offering professional service at a reasonable price. It's perfect for special occasions with friends and family. If you're looking to celebrate with your partner, our car service can get you where you need to go hassle-free and in comfort in an SUV or car. Our car service ensures you arrive safely and stylishly so that you can relax and enjoy your night out.",
    image: 'Night-On-The-Town',
    altText: 'Night-On-The-Town',
  },
  {
    title: 'INTERCITY TRAVEL',
    body: 'In the current times of Covid-19, more business clients want to take a car service when they are going out of Toronto for a business trip. Having personal transportation when travelling from city to city in Southern Ontario can benefit you and your business. Whether travelling from Toronto to Ottawa or Toronto to Windsor, hire one of our reliable chauffeurs to take you from point A to point B.',
    image: 'intercity-travel-1',
    altText: 'Intercity-Travel',
  },
  {
    title: 'NIAGARA FALLS TOURS',
    body: "It is only an hour and a half from the city of Toronto. Suppose you are coming on a flight into Pearson airport in Mississauga. In that case, your transportation by one of our chauffeurs is only about an hour. Get out of town and take a tour of Niagara Falls with a car service to one of Canada's most visited tourist attractions. You'll be taken aback by its beauty and awe-inspiring wonder. Or take in the sights from a different perspective entirely as you explore one of Ontario's premier wine regions nearby.",
    image: 'niagara-falls-tour',
    altText: 'Niagara-Falls-Tour',
  },
  {
    title: 'TORONTO INTERNATIONAL FILM FESTIVAL',
    body: 'Make the red carpet your runway with our Toronto car service and arrive at the largest film festival in Canada looking like a movie star. Travel to TIFF events in style and come feeling like a celebrity. There are many Toronto car services, but only one car service ensures you have a good time.',
    image: 'TIFF',
    altText: 'TIFF',
  },
  {
    title: 'AIRPORT SERVICES',
    body: 'Take your time. All travellers picked at Toronto Pearson International Airport get 60 minutes complimentary waiting time. For airport pickups, drivers track flights status tracking to ensure they are there when they arrive. We will load your luggage and take you to your hotel. We cover all airports in southern Ontario at reasonable prices.',
    image: 'airplane',
    altText: 'airport-services',
  },
  {
    title: 'CORPORATE TRAVEL',
    body: "With our car service, as far as we're concerned, you are number one! Arrive on time to all corporate events during your stay in Toronto. Whether you're coming in from Toronto Pearson Airport (YYZ) or from Toronto Airport (YTZ) located downtown Toronto we have a car or an SUV that will cover your needs.",
    image: 'briefcase',
    altText: 'Corporate-Travel',
  },
  {
    title: 'POINT TO POINT SERVICES',
    body: 'Point-To-Point transfers are an excellent choice for anyone who wants more convenience when it comes to transportation. Many people rely on our company for transportation, and we work hard to provide them with a solution that matches up with their needs at all times. We will take care of your needs and make sure that you are happy with what you get.',
    image: 'point-to-point',
    altText: 'Point-To-Point',
  },
]
</script>
