// const loader = new Loader({
//   apiKey: config.public.MAPS_API_KEY as string,
//   libraries: ['places'],
//   version: 'weekly',
//   region: 'ca',
// })
//
// const myMap = ref<HTMLElement>(null)
//
// function initMap(): void {
//   loader.load().then(() => {
//     const map = new google.maps.Map(myMap.value, {
//       mapTypeControl: false,
//       fullscreenControl: false,
//       center: { lat: 43.65107, lng: -79.347015 },
//       zoom: 9,
//     })
//     new AutocompleteDirectionsHandler(map)
//   })
//
//   class AutocompleteDirectionsHandler {
//     map: google.maps.Map
//     originPlaceId: string
//     destinationPlaceId: string
//     travelMode: google.maps.TravelMode
//     directionsService: google.maps.DirectionsService
//     directionsRenderer: google.maps.DirectionsRenderer
//
//     constructor(map: google.maps.Map) {
//       this.map = map
//       this.originPlaceId = ''
//       this.destinationPlaceId = ''
//       this.travelMode = google.maps.TravelMode.DRIVING
//       this.directionsService = new google.maps.DirectionsService()
//       this.directionsRenderer = new google.maps.DirectionsRenderer()
//       this.directionsRenderer.setMap(map)
//
//       const originInputOne = ref('origin-input')
//       const destinationInputOne = ref('destination-input')
//       const originInput = document.getElementById(
//         originInputOne.value as string
//       ) as HTMLInputElement
//       const destinationInput = document.getElementById(
//         destinationInputOne.value as string
//       ) as HTMLInputElement
//
//       // Specify just the place data fields that you need.
//       const originAutocomplete = new google.maps.places.Autocomplete(
//         originInput,
//         {
//           fields: ['all'],
//         }
//       )
//
//       // Specify just the place data fields that you need.
//       const destinationAutocomplete = new google.maps.places.Autocomplete(
//         destinationInput,
//         {
//           fields: ['all'],
//         }
//       )
//       console.log(originAutocomplete)
//       console.log(destinationAutocomplete)
//
//       this.setupPlaceChangedListener(originAutocomplete, 'ORIG')
//       this.setupPlaceChangedListener(destinationAutocomplete, 'DEST')
//     }
//
//     setupPlaceChangedListener(
//       autocomplete: google.maps.places.Autocomplete,
//       mode: string
//     ) {
//       autocomplete.bindTo('bounds', this.map)
//
//       autocomplete.addListener('place_changed', () => {
//         const place = autocomplete.getPlace()
//         const { address_components, formatted_address, name, geometry } = place
//         const addressComponents =
//           address_components as google.maps.GeocoderAddressComponent[]
//         const lat = geometry.location.lat() as number
//         const lng = geometry.location.lng() as number
//         const formattedAddress = formatted_address as string
//         const placeName = name as string
//         const address = addressComponents.map(({ long_name, short_name }) => ({
//           longName: long_name as string,
//           shortName: short_name as string,
//         }))
//         console.log(address)
//         console.log(formattedAddress)
//         console.log(placeName)
//         console.log(lat)
//         console.log(lng)
//         if (mode === 'ORIG') {
//           origin_address_components.value = addressComponents
//           origin_formatted_address.value = formattedAddress
//           origin_place_name.value = placeName
//           origin_lat.value = lat
//           origin_lng.value = lng
//         } else {
//           destination_address_components.value = addressComponents
//           destination_formatted_address.value = formattedAddress
//           destination_place_name.value = placeName
//           destination_lat.value = lat
//           destination_lng.value = lng
//         }
//
//         if (!place.place_id) {
//           window.alert('Please select an option from the dropdown list.')
//           return
//         }
//
//         if (mode === 'ORIG') {
//           this.originPlaceId = place.place_id
//         } else {
//           this.destinationPlaceId = place.place_id
//         }
//         this.route()
//         if (destination_lat.value && origin_lat.value) {
//         }
//       })
//     }
//
//     route() {
//       if (!this.originPlaceId || !this.destinationPlaceId) {
//         return
//       }
//
//       const me = this
//
//       this.directionsService.route(
//         {
//           origin: { placeId: this.originPlaceId },
//           destination: { placeId: this.destinationPlaceId },
//           travelMode: this.travelMode,
//         },
//         (response, status) => {
//           console.log(response)
//           if (status === 'OK') {
//             me.directionsRenderer.setDirections(response)
//             distance_traveled.value = (response.routes[0].legs[0].distance
//               .value / 1000) as number
//             duration_traveled.value = (response.routes[0].legs[0].duration
//               .value / 60) as number
//             origin_location.value = response.routes[0].legs[0].start_address
//             destination_location.value = response.routes[0].legs[0].end_address
//             origin_location_type.value = response.geocoded_waypoints[0]
//               .types[0] as string
//             destination_location_type.value = response.geocoded_waypoints[1]
//               .types[0] as string
//           } else {
//             window.alert('Directions request failed due to ' + status)
//           }
//         }
//       )
//     }
//   }
// }
