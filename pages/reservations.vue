<script setup lang="ts">
const headerInfo = {
  aboveHeading: 'GET IN TOUCH',
  heading: 'BOOK TODAY',
  body: "Your chauffeur is just a phone call away! Don't hesitate to contact us or get an online quote for rates and availability.",
  image: 'background-image: url("/images/Waiting-For-Car-Service.jpg");',
}
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <TheHeader
      :aboveHeading="headerInfo.aboveHeading"
      :body="headerInfo.body"
      :heading="headerInfo.heading"
      :image="headerInfo.image"
    />
    <section class="px-6">
      <div
        class="container mx-auto h-[125vh] -mt-16 mb-16 w-full max-w-7xl z-20 relative md:-mt-20"
      >
        <iframe
          src="https://book.mylimobiz.com/v4/luxridesvc"
          class="h-[130vh] shadow-xl w-full md:h-[120vh]"
        />
      </div>
    </section>
  </div>
</template>
