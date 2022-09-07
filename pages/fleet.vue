<script setup lang="ts">
import { useSelectedVehicle } from '~/composables/useSelectedVehicle'
import { Ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

useHead({
  title: 'Luxury Ride Service | Fleet',
})
definePageMeta({
  layout: 'default',
  pageTransition: {
    appear: true,
    enterFromClass: 'opacity-0',
    enterActiveClass: 'duration-[500ms]',
    leaveToClass: 'opacity-0',
    leaveActiveClass: 'duration-[500ms]',
    mode: 'out-in',
  },
})
const headerInfo = {
  aboveHeading: 'Discover Our Luxury Vehicles',
  heading: 'OUR FLEET',
  body: "Luxury Ride Service is here to help you get from place to place. It's our job to provide you with the means of transportation, and we won't stop until it's done right.",
  image: 'background-image: url("/images/City-View-Navigator-Interior.jpg")',
}

interface Vehicles {
  icon: string
  title: string
  id: number
  tag: string
  to: string
}
const selectedTab: Ref<number> = ref(0)
function changeTab(index) {
  selectedTab.value = index
  console.log(selectedTab.value)
}

const tabs = [
  {
    icon: 'Fleet-XTS-Continental',
    title: 'Cadillac XTS',
    id: 0,
    tag: resolveComponent('FleetCadillacXts'),
    to: '/fleet',
  },
  {
    icon: 'Fleet-XTS-Continental',
    title: 'Lincoln Continental',
    id: 1,
    tag: resolveComponent('FleetLincolnContinental'),
    to: '/fleet/lincoln-continental',
  },
  {
    icon: 'Fleet-Navigator-Escalade',
    title: 'Cadillac Escalade',
    id: 2,
    tag: resolveComponent('FleetCadillacEscalade'),
    to: '/fleet/cadillac-escalade',
  },
  {
    icon: 'Fleet-Navigator-Escalade',
    title: 'Lincoln Navigator',
    id: 3,
    tag: resolveComponent('FleetLincolnNavigator'),
    to: '/fleet/lincoln-navigator',
  },
  {
    icon: 'Fleet-Tesla',
    title: 'Tesla S',
    id: 4,
    tag: resolveComponent('FleetTeslaS'),
    to: '/fleet/tesla-s',
  },
  {
    icon: 'Fleet-Other',
    title: 'Other',
    id: 6,
    tag: resolveComponent('FleetOther'),
    to: '/fleet/other',
  },
] as Vehicles[]

// const id = ref(1) as Ref<number>
// const vehicle = resolveComponent('FleetCadillacXts') as Ref<string>
// const tabRef = ref(null) as Ref<HTMLElement>
// const selectedVehicle = ref() as Ref<Vehicles>

// onMounted(() => {
//   if (tabRef.value) {
//     console.dir(tabRef.value)
//     vehicle.value = tabRef.value[0].dataset.vehicle
//   }
// })
//write a function that changes the vehicle value to the selected vehicle and uses the useSelectedVehicle hook to set the selected vehicle
// const setVehicle = () => {
//   selectedVehicle.value = useSelectedVehicle(tabs, id.value) as Vehicles
//   console.log(selectedVehicle.value.tag)
//   return (vehicle.value = selectedVehicle.value.tag)
// }
</script>

<template>
  <div>
    <TheHeader
      :aboveHeading="headerInfo.aboveHeading"
      :body="headerInfo.body"
      :heading="headerInfo.heading"
      :image="headerInfo.image"
    />
    <TabGroup
      @change="changeTab"
      as="div"
      :defaultIndex="0"
      class="container bg-background mx-auto pt-6 px-6 md:-mt-20 md:px-0"
    >
      <TabList
        class="mx-auto mb-12 grid z-10 gap-1 grid-cols-2 relative md:grid-cols-3 lg:grid-cols-6"
      >
        <Tab
          v-slot="{ selected }"
          v-for="tab in tabs"
          :key="tab.id"
          as="template"
        >
          <button
            ref="tabRef"
            :id="tab.id"
            :data-vehicle="tab.tag"
            :class="[
              selected ? 'bg-primary text-white' : 'bg-white text-black',
            ]"
            class="bg-white flex flex-col space-y-4 text-black w-full py-16 col-span-1 items-center justify-center hover:bg-primary border-white"
          >
            <img :src="`/icons/${tab.icon}.svg`" alt="icon" class="w-16" />
            <span
              class="text-sm text-center text-body tracking-widest uppercase hover:text-white"
            >
              {{ tab.title }}
            </span>
          </button>
        </Tab>
      </TabList>
      <TabPanels as="div">
        <TabPanel v-for="tab in tabs" :key="tab.id">
          <component :is="tab.tag" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<style scoped>
.exact-active-class {
  background-color: #bb880f;
}
</style>
