import { Vehicles } from '~/composables/fleetTabs'
// write a function that takes an id parameter and returns the tag
// property
// of the selected vehicle from an array of Vehicles
export const useSelectedVehicle = (vehicles: Vehicles[], id: number) => {
  return vehicles.find((vehicle) => vehicle.id === id)
}
