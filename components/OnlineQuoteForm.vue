<script setup lang="ts">
import { VueTelInput } from 'vue-tel-input'
import { Rates, Surcharges } from '~/composables/useRateCalculator'
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMapStore } from '~~/stores/useMapStore'
import { FormOptions } from '~~/types/FormOptions'
import { Loader } from '@googlemaps/js-api-loader'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const config = useRuntimeConfig()
const loader = new Loader({
  apiKey: config.public.MAPS_API_KEY as string,
  libraries: ['places'],
  version: 'weekly',
  region: 'ca',
})

const myMap = ref<HTMLElement>(null)

const initMap = (): void => {
  loader.load().then(() => {
    const map = new google.maps.Map(myMap.value, {
      mapTypeControl: false,
      fullscreenControl: false,
      center: { lat: 43.65107, lng: -79.347015 },
      zoom: 9,
    })
    new AutocompleteDirectionsHandler(map)
  })

  class AutocompleteDirectionsHandler {
    map: google.maps.Map
    originPlaceId: string
    destinationPlaceId: string
    travelMode: google.maps.TravelMode
    directionsService: google.maps.DirectionsService
    directionsRenderer: google.maps.DirectionsRenderer

    constructor(map: google.maps.Map) {
      this.map = map
      this.originPlaceId = ''
      this.destinationPlaceId = ''
      this.travelMode = google.maps.TravelMode.DRIVING
      this.directionsService = new google.maps.DirectionsService()
      this.directionsRenderer = new google.maps.DirectionsRenderer()
      this.directionsRenderer.setMap(map)

      const originInputOne = ref('origin-input')
      const destinationInputOne = ref('destination-input')
      const originInput = document.getElementById(
        originInputOne.value as string
      ) as HTMLInputElement
      const destinationInput = document.getElementById(
        destinationInputOne.value as string
      ) as HTMLInputElement

      // Specify just the place data fields that you need.
      const originAutocomplete = new google.maps.places.Autocomplete(
        originInput,
        {
          fields: ['all'],
        }
      )

      // Specify just the place data fields that you need.
      const destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput,
        {
          fields: ['all'],
        }
      )
      console.log(destinationAutocomplete)

      this.setupPlaceChangedListener(originAutocomplete, 'ORIG')
      this.setupPlaceChangedListener(destinationAutocomplete, 'DEST')
    }

    setupPlaceChangedListener(
      autocomplete: google.maps.places.Autocomplete,
      mode: string
    ) {
      autocomplete.bindTo('bounds', this.map)

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        const { address_components, formatted_address, name, geometry } = place
        const addressComponents =
          address_components as google.maps.GeocoderAddressComponent[]
        const lat = geometry.location.lat() as number
        const lng = geometry.location.lng() as number
        const formattedAddress = formatted_address as string
        const placeName = name as string
        const address = addressComponents.map(({ long_name, short_name }) => ({
          longName: long_name as string,
          shortName: short_name as string,
        }))
        console.log(address)
        console.log(formattedAddress)
        console.log(placeName)
        console.log(lat)
        console.log(lng)
        switch (mode) {
          case 'ORIG':
            origin_address_components.value = addressComponents
            origin_formatted_address.value = formattedAddress
            origin_place_name.value = placeName
            origin_lat.value = lat
            origin_lng.value = lng
            break;
          default:
            destination_address_components.value = addressComponents
            destination_formatted_address.value = formattedAddress
            destination_place_name.value = placeName
            destination_lat.value = lat
            destination_lng.value = lng
            break;
        }

        if (!place.place_id) {
          window.alert('Please select an option from the dropdown list.')
          return
        }

        switch (mode) {
          case 'ORIG':
            this.originPlaceId = place.place_id
            break;
          default:
            this.destinationPlaceId = place.place_id
            break;
        }
        this.route()
        if (destination_lat.value && origin_lat.value) {
        }
      })
    }

    route() {
      if (!this.originPlaceId || !this.destinationPlaceId) {
        return
      }

      this.directionsService.route(
        {
          origin: { placeId: this.originPlaceId },
          destination: { placeId: this.destinationPlaceId },
          travelMode: this.travelMode,
        },
        (response, status) => {
          console.log(response)
          if (status === 'OK') {
            this.directionsRenderer.setDirections(response)
            distance_traveled.value = (response.routes[0].legs[0].distance
              .value / 1000) as number
            duration_traveled.value = (response.routes[0].legs[0].duration
              .value / 60) as number
            origin_location.value = response.routes[0].legs[0].start_address
            destination_location.value = response.routes[0].legs[0].end_address
            origin_location_type.value = response.geocoded_waypoints[0]
              .types[0] as string
            destination_location_type.value = response.geocoded_waypoints[1]
              .types[0] as string
            return
          }
          window.alert(`Directions request failed due to ${status}`)
        }
      )
    }
  }
}

onMounted(() => {
  if (!myMap.value) {
    return
  }
  initMap()
})

const passengerCountOptions = [
  {
    name: '1 Passenger',
    id: 1,
  },
  {
    name: '2 Passengers',
    id: 2,
  },
  {
    name: '3 Passengers',
    id: 3,
  },
  {
    name: '4 Passengers',
    id: 4,
  },
  {
    name: '5 Passengers',
    id: 5,
  },
  {
    name: '6 Passengers',
    id: 6,
  },
  {
    name: '7 Passengers',
    id: 7,
  },
] as FormOptions[]
const selectedPassengerCount = ref(passengerCountOptions[0].value)

const serviceTypeOptions = [
  { name: 'Pick A Service Type..', id: 0 },
  { name: 'Point-To-Point', id: 1 },
  { name: 'To-Airport', id: 2 },
  { name: 'From-Airport', id: 3 },
  { name: 'Hourly/As-Directed', id: 4 },
] as FormOptions[]
const selectedServiceType = ref(serviceTypeOptions[0])

const vehicleTypeOptions = [
  { name: 'Pick A Vehicle Type..', id: 0 },
  { name: 'Standard Sedan', id: 1 },
  { name: 'Premium Sedan', id: 2 },
  { name: 'Standard SUV', id: 3 },
  { name: 'Premium SUV', id: 4 },
] as FormOptions[]
const selectedVehicleType = ref(vehicleTypeOptions[0])

const hoursRequiredOptions = [
  {
    name: '2 hrs',
    id: 2,
  },
  {
    name: '3 hrs',
    id: 3,
  },
  {
    name: '4 hrs',
    id: 4,
  },
  {
    name: '5 hrs',
    id: 5,
  },
  {
    name: '6 hrs',
    id: 6,
  },
  {
    name: '7 hrs',
    id: 7,
  },
  {
    name: '8 hrs',
    id: 8,
  },
  {
    name: '9 hrs',
    id: 9,
  },
  {
    name: '10 hrs',
    id: 10,
  },
  {
    name: '11 hrs',
    id: 11,
  },
  {
    name: '12 hrs',
    id: 12,
  },
] as FormOptions[]
const selectedHours = ref(hoursRequiredOptions[0])

//data for Google Maps autocomplete from the maps store
const mapStore = useMapStore()
const {
  distance_traveled,
  duration_traveled,
  origin_location,
  origin_location_type,
  destination_location,
  destination_location_type,
  origin_address_components,
  destination_address_components,
  origin_lng,
  origin_lat,
  destination_lng,
  destination_lat,
  origin_formatted_address,
  destination_formatted_address,
  origin_place_name,
  destination_place_name,
  first_name,
  last_name,
  email_address,
  phone_number,
  vehicle_image,
  // pickup_date,
  // pickup_time,
  service_type,
  vehicle_type,
  number_of_hours,
  // num_passengers,
  // is_round_trip,
  base_rate,
  fuel_surcharge,
  gratuity_rate,
  hst,
  total_cost,
} = storeToRefs(mapStore)

const origin = ref('')
const destination = ref('')
const date = ref('')
const time = ref('')
const passengerCount = ref(null)
console.log(passengerCount.value)
const hoursCount = ref(null)
console.log(hoursCount.value)
// const phone_number = ref(null)
// const email_address = ref('')
// const service_type = ref('')
// const vehicle_type = ref('')
// const first_name = ref('')
// const last_name = ref('')
const passenger_count = ref('')
const hours_count = ref('')
// const myFormData = ref(null)

console.log(
  origin.value,
  destination.value,
  date.value,
  time.value,
  phone_number.value,
  email_address.value,
  service_type.value,
  vehicle_type.value,
  first_name.value,
  last_name.value,
  passenger_count.value,
  hours_count.value
)

const vehicleType = ref(null) as Ref<FormOptions>
const numberOfHours = ref(1) as Ref<number>

//logic to determine if it's an hourly based or distance based quote
const isItHourly = ref(false) as Ref<boolean>

watch(service_type, () => {
  switch (service_type.value.value) {
    case 4:
      isItHourly.value = true
      numberOfHours.value = 2
      break;
    default:
      isItHourly.value = false
      numberOfHours.value = null
      break;
  }
  console.log(
    service_type.value.label,
    service_type.value.value,
    numberOfHours.value,
    isItHourly.value
  )
})

const loading = ref(false) as Ref<boolean>

const onSubmit = async (evt: Event) => {
  loading.value = true
  const rates = (await $fetch('/api/rates')) as Rates[]
  const surcharges = (await $fetch('/api/surcharges')) as Surcharges
  console.log(vehicleType.value)
  vehicle_type.value.value = useToNumber(
    vehicleType.value.value
  ) as unknown as number
  number_of_hours.value.value = numberOfHours.value as number
  console.log(isItHourly.value)
  const serviceRate = getRateFromId(
    useToNumber(vehicleType.value.value) as unknown as number,
    rates
  )
  console.log(serviceRate)
  const baseRate = getBaseRate(
    isItHourly.value,
    numberOfHours.value,
    distance_traveled.value,
    serviceRate as Rates
  ) as number
  console.log(baseRate)
  const { fuelSurcharge, gratuity, HST } = getSurchargeAmounts(
    baseRate,
    surcharges
  )
  total_cost.value = usePrecision(
    ref(baseRate + fuelSurcharge + gratuity + HST),
    2
  ) as unknown as number

  console.log(total_cost.value)
  //make total cost have 2 decimal places

  //add the separated rate data to the quote store
  base_rate.value = baseRate
  fuel_surcharge.value = fuelSurcharge
  gratuity_rate.value = gratuity
  hst.value = HST

  vehicle_image.value = vehicleType.value.label === 'Standard Sedan' ? 'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/8c7c6a8d-06ad-4278-1c70-9d497b1cb200/1024' : vehicleType.value.label === 'Premium Sedan' ? 'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/5d171f30-de2f-447c-a602-95ccf248c600/1024' : vehicleType.value.label === 'Standard SUV' ? 'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/b4bf6461-ba55-48bd-e0ba-d613ae383000/1024' : 'https://imagedelivery.net/9mQjskQ9vgwm3kCilycqww/5d80107f-4800-45ae-8e20-c4adf2792f00/1024'
  console.log(vehicle_image.value)
  const timestamp = evt.timeStamp
  const {
    origin_input,
    destination_input,
    pickup_date,
    pickup_time,
    // service_type,
    num_passengers,
    first_name,
    last_name,
    email_address,
    phone_number,
    /* @ts-ignore */
  } = Object.fromEntries(new FormData(evt.target as HTMLFormElement))

  const service_type_id = ref(service_type.value.value) as Ref<number>

  const formBody = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'pick_up_date',
        value: pickup_date,
      },
      {
        objectTypeId: '0-1',
        name: 'pick_up_time',
        value: pickup_time,
      },
      {
        objectTypeId: '0-1',
        name: 'vehicle_type',
        value: vehicleType.value.label,
      },
      {
        objectTypeId: '0-1',
        name: 'origin_formatted_address',
        value: origin_input,
      },
      {
        objectTypeId: '0-1',
        name: 'destination_formatted_address',
        value: destination_input,
      },
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: first_name,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: last_name,
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: email_address,
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: phone_number,
      },
      {
        objectTypeId: '0-1',
        name: 'service_type',
        value: service_type.value.label,
      },
      {
        objectTypeId: '0-1',
        name: 'service_type_id',
        value: service_type_id.value,
      },
      {
        objectTypeId: '0-1',
        name: 'deal_amount',
        value: total_cost.value,
      },
      {
        objectTypeId: '0-1',
        name: 'pax_amount',
        value: num_passengers,
      },
      {
        objectTypeId: '0-1',
        name: 'hours',
        value: numberOfHours.value,
      },
      {
        objectTypeId: '0-1',
        name: 'distance',
        value: distance_traveled.value,
      },
      {
        objectTypeId: '0-1',
        name: 'time',
        value: duration_traveled.value,
      },
      {
        objectTypeId: '0-1',
        name: 'submission_timestamp',
        value: timestamp,
      },
      {
        objectTypeId: '0-1',
        name: 'vehicle_image_url',
        value: vehicle_image.value,
      },
      {
        objectTypeId: '0-1',
        name: 'destination_place_name',
        value: destination_place_name.value,
      },
      {
        objectTypeId: '0-1',
        name: 'origin_place_name',
        value: origin_place_name.value,
      },
    ],
  }
  console.log(formBody)
  console.log(evt)
  const { data, error } = await useFetch('/api/formSubmit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formBody,
  })
  const router = useRouter()
  setTimeout(() => {
    router.push('/quoted')
  }, 750)
  loading.value = false

  return {
    data,
    error,
  }
}
const telInput = ref<HTMLElement | null>(null)
if (telInput) {
  await console.dir(telInput)
}
</script>

<template>
  <div class="p-8">
    <form
      name="quote_form"
      id="quote_form"
      ref="formData"
      @submit.prevent="onSubmit"
      class="max-w-2xl p-6 mx-auto space-y-4 prose bg-black border border-white form-control"
      method="POST"
      action="https://formspree.io/f/xnqkzqjy"
    >
      <h2 class="text-center text-white uppercase">Instant Quote</h2>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 mt-1">
          <InputText
            v-model.trim="origin"
            type="text"
            id="origin-input"
            name="origin_input"
            placeholder="Enter Your Pickup Location..."
            validation-error-message="Please enter a Pickup Location"
          />
        </div>
        <div class="col-span-12 mt-1">
          <InputText
            v-model.trim="destination"
            type="text"
            id="destination-input"
            name="destination_input"
            placeholder="Enter Your Drop Off Location..."
            validation-error-message="Please enter Drop Off Location"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 mt-1">
          <Datepicker
            timePicker
            v-model="time"
            inputClassName="rounded-none input input-md input-bordered w-full placeholder-gray-500"
            :is24="false"
            placeholder="Select Pickup Time...."
          >
            <template #input-icon>
              <IconClock
                class="m-1 text-color-[#959595]"
                width="20"
                height="20"
              />
            </template>
          </Datepicker>
        </div>
        <div class="col-span-6 mt-1">
          <Datepicker
            v-model="date"
            :minDate="new Date()"
            inputClassName="rounded-none input input-md input-bordered w-full placeholder-gray-500"
            placeholder="Select Pickup Date...."
            :enableTimePicker="false"
          >
          </Datepicker>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 mt-1">
          <InputSelect
            v-model="vehicle_type.value"
            type="select"
            id="vehicle-type"
            name="vehicle_type"
            placeholder="Pick A Vehicle Type"
            validation-error-message="Please Pick A Vehicle Type"
            :options="vehicleTypeOptions"
          />
        </div>
        <div class="col-span-6 mt-1">
          <InputSelect
            v-model="service_type.value"
            type="select"
            id="service-type"
            name="service_type"
            placeholder="Pick A Service Type"
            validation-error-message="Please Pick A Service Type"
            :options="serviceTypeOptions"
          />
        </div>
      </div>

      <!--    Vehicle and Service Type Input Sections-->

      <!--      Service Type ComboBox Input-->
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 mt-1">
          <Listbox v-model="selectedServiceType" name="vehicle_type" by="id">
            <ListboxLabel
              v-if="false"
              class="block text-sm font-medium text-gray-700"
              >Service Types
            </ListboxLabel>
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 shadow-sm cursor-default focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              >
                <span class="block truncate"
                  >{{ selectedServiceType.name }}
                </span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                >
                  <ChevronUpDownIcon
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base list-none bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    as="template"
                    v-for="option in serviceTypeOptions"
                    :key="option.id"
                    :value="option"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[
                        active ? 'text-white bg-primary' : 'text-gray-900',
                        'relative cursor-default select-none p-4',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ option.name }}</span
                      >

                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-primary',
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                        ]"
                      >
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

        <!--        Vehicle Type ComboBox Input-->
        <div class="col-span-6 mt-1">
          <Listbox v-model="selectedVehicleType" name="vehicle_type" by="id">
            <ListboxLabel
              v-if="false"
              class="block text-sm font-medium text-gray-700"
              >Vehicle Types
            </ListboxLabel>
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left list-none bg-white border border-gray-300 shadow-sm cursor-default focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              >
                <span class="block truncate"
                  >{{ selectedVehicleType.name }}
                </span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                >
                  <ChevronUpDownIcon
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute z-50 w-full py-1 mt-1 overflow-auto text-base list-none bg-white rounded-md shadow-lg max-h-72 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    as="template"
                    v-for="option in vehicleTypeOptions"
                    :key="option.id"
                    :value="option"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[
                        active ? 'bg-primary/75 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ option.name }}</span
                      >

                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-primary',
                          'absolute inset-y-0 left-0 flex items-center pl-3',
                        ]"
                      >
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

        <div class="col-span-6 mt-1">
          <InputText
            v-model.trim="first_name"
            type="text"
            id="first-name"
            name="first_name"
            placeholder="Enter Your First Name..."
            validation-error-message="Please enter a First Name"
          />
        </div>
        <div class="col-span-6 mt-1">
          <InputText
            v-model.trim="last_name"
            type="text"
            id="last-name"
            name="last_name"
            placeholder="Enter Your Last Name..."
            validation-error-message="Please enter a Last Name"
          />
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 mt-1">
          <InputText
            v-model.trim="email_address"
            type="email"
            id="email-address"
            name="email_address"
            placeholder="Enter Your Email Address..."
            validation-error-message="Please enter a valid email address"
          />
        </div>
        <div class="col-span-6 mt-1">
          <VueTelInput
            ref="telInput"
            v-model="phone_number"
            :inputOptions="{
              id: 'phone-number',
              required: true,
              showDialCode: true,
              name: 'phone_number',
              autocomplete: true,
              type: 'tel',
              styleClasses: 'rounded-none w-full',
            }"
            :dropdownOptions="{
              showDialCodeInList: true,
              showFlags: true,
              showCountryCodeInList: true,
            }"
            invalidMsg="Please enter a valid phone number"
            parsedPlaceholder="Enter Your Phone Number..."
          />
        </div>
      </div>
      <button
        type="submit"
        class="w-full px-5 py-2 text-white uppercase bg-red-700"
      >
        Check Pricing And Availability
      </button>
    </form>
    <div ref="myMap" v-show="false"></div>
  </div>
</template>

<!-- <style scoped>
//.vti__dropdown {
//  width: 100%;
//  border: 1px solid #e2e8f0;
//  border-radius: 0.25rem;
//  background-color: #fff;
//  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//  padding: 0.5rem;
//  font-size: 1rem;
//  line-height: 1.5;
//  color: #4a5568;
//  outline: none;
//  transition: all 0.2s ease-in-out;
//}
</style> -->
