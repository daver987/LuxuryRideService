<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import Datepicker from '@vuepic/vue-datepicker'
import { VueTelInput } from 'vue-tel-input'
import { createInput } from '@formkit/vue'

const myDatePicker = createInput(Datepicker)
const myTelInput = createInput(VueTelInput)

const library = markRaw({
  Datepicker,
  VueTelInput,
})
console.dir(Datepicker)
const config = useRuntimeConfig()

const loader = new Loader({
  apiKey: config.public.MAPS_API_KEY as string,
  libraries: ['places'],
  version: 'weekly',
  region: 'ca',
})

const myMap = ref<HTMLElement>(null)

function initMap(): void {
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
      console.log(originAutocomplete)
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
            autocompleteData.origin_address_components = addressComponents
            autocompleteData.origin_formatted_address = formattedAddress
            autocompleteData.origin_place_name = placeName
            autocompleteData.origin_lat = lat
            autocompleteData.origin_lng = lng
            break
          default:
            autocompleteData.destination_address_components = addressComponents
            autocompleteData.destination_formatted_address = formattedAddress
            autocompleteData.destination_place_name = placeName
            autocompleteData.destination_lat = lat
            autocompleteData.destination_lng = lng
            break
        }

        if (place.place_id) {
        } else {
          window.alert('Please select an option from the dropdown list.')
          return
        }

        switch (mode) {
          case 'ORIG':
            this.originPlaceId = place.place_id
            break
          default:
            this.destinationPlaceId = place.place_id
            break
        }
        this.route()
        if (
          !(autocompleteData.destination_lat && autocompleteData.origin_lat)
        ) {
          return
        }
      })
    }

    route(): void {
      if (!this.originPlaceId || !this.destinationPlaceId) {
        return
      }

      this.directionsService.route(
        {
          origin: { placeId: this.originPlaceId },
          destination: { placeId: this.destinationPlaceId },
          travelMode: this.travelMode,
        },
        (response, status): void => {
          console.log(response)
          switch (status) {
            case 'OK':
              this.directionsRenderer.setDirections(response)
              autocompleteData.distance_traveled = (response.routes[0].legs[0]
                .distance.value / 1000) as number
              autocompleteData.duration_traveled = (response.routes[0].legs[0]
                .duration.value / 60) as number
              autocompleteData.origin_location =
                response.routes[0].legs[0].start_address
              autocompleteData.destination_location =
                response.routes[0].legs[0].end_address
              autocompleteData.origin_location_type = response
                .geocoded_waypoints[0].types[0] as string
              autocompleteData.destination_location_type = response
                .geocoded_waypoints[1].types[0] as string
              return
          }
          window.alert(`Directions request failed due to ${status}`)
        }
      )
    }
  }
}

onMounted(() => {
  if (!myMap.value) return
  initMap()
})

const autocompleteData = reactive({
  origin_address_components: [],
  origin_formatted_address: '',
  origin_place_name: '',
  origin_lat: 0,
  origin_lng: 0,
  destination_address_components: [],
  destination_formatted_address: '',
  destination_place_name: '',
  destination_lat: 0,
  destination_lng: 0,
  distance_traveled: 0,
  duration_traveled: 0,
  origin_location: '',
  destination_location: '',
  origin_location_type: '',
  destination_location_type: '',
}) as any

const data = reactive({
  origin_input: null,
  destination_input: null,
  pickup_date: null,
  pickup_time: null,
  vehicle_type: null,
  num_passengers: null,
  service_type: null,
  number_of_hours: null,
  passenger_count: null,
  num_hours: null,
  first_name: null,
  last_name: null,
  email_address: null,
  phone_number: null,
  isDisabled: true,
  time: null,
  inputOptions: {
    id: 'phone-number',
    required: true,
    showDialCode: true,
    name: 'phone_number',
    autocomplete: true,
    type: 'tel',
  },
})

console.log(data)
watch(data, () => {
  console.log(data)
})

const schema = [
  {
    $el: 'h2',
    attrs: { class: 'text-2xl uppercase text-center text-white mb-4' },
    children: 'Instant Quote',
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-1 gap-4' },
    children: [
      {
        $formkit: 'text',
        name: 'origin_input',
        id: 'origin-input',
        placeholder: 'Enter Address or Airport Code...',
        // label: 'Pickup Location:',
      },
    ],
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-1 gap-4' },
    children: [
      {
        $formkit: 'text',
        id: 'destination-input',
        name: 'destination_input',
        placeholder: 'Enter Address or Airport Code...',
        // label: 'Drop-off Location:',
      },
    ],
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
    children: [
      {
        $cmp: 'FormKit',
        type: 'myDatePicker',
        attrs: {
          id: 'pickup-time',
          name: 'pickup_time',
          placeholder: 'Enter Pickup Time...',
        },
        props: {
          dark: false,
          timePicker: true,
          modelValue: `$pickup_time`,
          inputClassName:
            'rounded-md w-full placeholder-gray-500 text-gray-400',
        },
      },
      {
        $cmp: 'Datepicker',
        attrs: {
          id: 'pickup-date',
          placeholder: `Enter Pickup Time...`,
        },
        props: {
          enableTimePicker: false,
          closeOnAutoApply: true,
          is24: false,
          name: 'pickup_date',
          dark: false,
          modelValue: `$pickup_date`,
          inputClassName:
            'rounded-md w-full placeholder-gray-500 text-gray-400',
        },
      },
    ],
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4' },
    children: [
      {
        $cmp: 'FormKit',
        props: {
          type: 'select',
          id: 'service-type',
          name: 'service_type',
          placeholder: 'Pick the Service Type',
          // label: 'Service Type:',
          options: [
            {
              label: 'Point-to-Point',
              value: 1,
            },
            {
              label: 'To Airport',
              value: 2,
            },
            {
              label: 'From Airport',
              value: 3,
            },
            {
              label: 'Hourly/As Directed',
              value: 4,
            },
          ],
        },
      },
      {
        $formkit: 'select',
        id: 'passenger-count',
        name: 'passenger_count',
        // label: 'Number of Passengers:',
        placeholder: 'Number of Passengers:',
        options: [
          {
            label: '1 passenger',
            value: 1,
          },
          {
            label: '2 passengers',
            value: 2,
          },
          {
            label: '3 passengers',
            value: 3,
          },
          {
            label: '4 passengers',
            value: 4,
          },
          {
            label: '5 passengers',
            value: 5,
          },
          {
            label: '6 passengers',
            value: 6,
          },
          {
            label: '7 passengers',
            value: 7,
          },
        ],
      },
    ],
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
    children: [
      {
        $cmp: 'FormKit',
        props: {
          type: 'select',
          id: 'vehicleType',
          name: 'vehicle_type',
          // label: 'Vehicle Type:',
          placeholder: 'Pick The Vehicle Type',
          options: [
            {
              label: 'Standard Sedan',
              value: 1,
            },
            {
              label: 'Premium Sedan',
              value: 2,
            },
            {
              label: 'Standard SUV',
              value: 3,
            },
            {
              label: 'Premium SUV',
              value: 4,
            },
          ],
        },
      },
      {
        $cmp: 'FormKit',
        props: {
          type: 'select',
          id: 'number-of-hours',
          name: 'number_of_hours',
          // label: 'Number Of Hours:',
          placeholder: '*For Hourly/As Directed Service',
          disabled: {
            if: '$get(serviceType).value === 4',
            then: false,
            else: true,
          },
          options: [
            {
              label: '2 hrs',
              value: 2,
            },
            {
              label: '3 hrs',
              value: 3,
            },
            {
              label: '4 hrs',
              value: 4,
            },
            {
              label: '5 hrs',
              value: 5,
            },
            {
              label: '6 hrs',
              value: 6,
            },
            {
              label: '7 hrs',
              value: 7,
            },
            {
              label: '8 hrs',
              value: 8,
            },
            {
              label: '9 hrs',
              value: 9,
            },
            {
              label: '10 hrs',
              value: 10,
            },
            {
              label: '11 hrs',
              value: 11,
            },
            {
              label: '12 hrs',
              value: 12,
            },
          ],
        },
      },
    ],
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
    children: [
      {
        $formkit: 'text',
        id: 'first-name',
        name: 'first_name',
        // label: 'First Name:',
        placeholder: 'Enter your First Name...',
      },
      {
        $formkit: 'text',
        id: 'last-name',
        name: 'last_name',
        // label: 'Last Name:',
        placeholder: 'Enter your Last Name...',
      },
    ],
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-1 sm:grid-cols-2 gap-4' },
    children: [
      {
        $formkit: 'email',
        id: 'email',
        prefixIcon: 'email',
        name: 'email_address',
        // label: 'Email Address:',
        placeholder: 'Enter your email...',
        validation: 'required|email',
      },
      {
        $cmp: 'VueTelInput',
        bind: `$inputOptions`,
        props: {
          id: 'phone_number',
          placeholder: 'Enter your phone number...',
          size: 'sm',
          modelValue: `$phone_number`,
          styleClasses: 'h-11',
        },
        attrs: {
          label: 'Phone Number:',
        },
      },
    ],
  },
  {
    $formkit: 'submit',
    id: 'submit',
    label: 'Get Pricing and Availability',
    classes: {
      outer: 'w-full',
      input: 'uppercase bg-red-700',
    },
  },
]
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" :library="library" />
  <div id="myMap" ref="myMap"></div>
</template>

<style scoped></style>
