<template>
  <div>
    <TheNavbar />
    <TheHeader
      :aboveHeading="headerInfo.aboveHeading"
      :body="headerInfo.body"
      :heading="headerInfo.heading"
      :image="headerInfo.image"
    />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const headerInfo = {
  aboveHeading: 'Discover Our Luxury Vehicles',
  heading: 'OUR FLEET',
  body: "Luxury Ride Service is here to help you get from place to place. It's our job to provide you with the means of transportation, and we won't stop until it's done right.",
  image: 'background-image: url("/images/City-View-Navigator-Interior.jpg")',
}
</script>

<style scoped></style>
