<template>
  <div>
    <div>
      <TheHeader
        :aboveHeading="headerInfo.aboveHeading"
        :body="headerInfo.body"
        :heading="headerInfo.heading"
        :image="headerInfo.image"
      />
    </div>
    <div class="container pt-4 px-6 md:px-0">
      <TabGroup
        class="bg-background w-full lg:-mt-20"
        as="div"
        :defaultIndex="0"
        @change="changedTab"
      >
        <TabList
          class="mb-12 grid z-10 gap-1 grid-cols-2 relative md:grid-cols-3 lg:grid-cols-6"
        >
          <Tab
            v-slot="{ selected }"
            as="template"
            v-for="tab in tabs"
            :key="tab.id"
            ><button
              class="flex flex-col space-y-4 w-full py-16 col-span-1 items-center justify-center hover:bg-primary"
              :class="[
                selected ? 'bg-primary text-white' : 'bg-white text-black',
              ]"
            >
              <img :src="`/icons/${tab.icon}.svg`" alt="icon" class="w-16" />
              <div class="text-sm text-center tracking-widest uppercase">
                {{ tab.title }}
              </div>
            </button></Tab
          >
        </TabList>
        <TabPanels>
          <TabPanel v-for="tab in tabs" :key="tab.id">
            <transition name="fade" mode="out-in">
              <component :is="tab.tag" />
            </transition>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const headerInfo = {
  aboveHeading: 'Discover Our Luxury Vehicles',
  heading: 'OUR FLEET',
  body: "Luxury Ride Service is here to help you get from place to place. It's our job to provide you with the means of transportation, and we won't stop until it's done right.",
  image: 'background-image: url("/images/City-View-Navigator-Interior.jpg")',
}
const tabs = [
  {
    icon: 'Fleet-XTS-Continental',
    title: 'Cadillac XTS',
    id: 1,
    tag: 'VehicleCadillacXts',
  },
  {
    icon: 'Fleet-XTS-Continental',
    title: 'Lincoln Continental',
    id: 2,
    tag: 'VehicleLincolnContinental',
  },
  {
    icon: 'Fleet-Navigator-Escalade',
    title: 'Cadillac Escalade',
    id: 3,
    tag: 'VehicleCadillacEscalade',
  },
  {
    icon: 'Fleet-Navigator-Escalade',
    title: 'Lincoln Navigator',
    id: 4,
    tag: 'VehicleLincolnNavigator',
  },
  {
    icon: 'Fleet-Tesla',
    title: 'Tesla S',
    id: 5,
    tag: 'VehicleTeslaS',
  },
  {
    icon: 'Fleet-Other',
    title: 'Other',
    id: 6,
    tag: 'VehicleOther',
  },
]
const selectedTab = ref('VehicleCadillacXts')
function changedTab() {
  selectedTab.value = tabs.tag
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
