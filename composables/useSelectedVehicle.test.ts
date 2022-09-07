import { useFleetTabs } from './fleetTabs'
import { useSelectedVehicle } from './useSelectedVehicle'
import { describe, it, expect } from 'vitest'

// write a test for the useSelectedVehicle function
describe('useSelectedVehicle', () => {
  const vehicles = useFleetTabs()
  it('returns the selected vehicle', () => {
    const selectedVehicle = useSelectedVehicle(vehicles, 1)
    expect(selectedVehicle).toEqual({
      icon: 'Fleet-XTS-Continental',
      title: 'Cadillac XTS',
      id: 1,
      tag: 'FleetCadillacXts',
      to: '/fleet',
    })
  })
  it('returns undefined if no vehicle is selected', () => {
    const selectedVehicle = useSelectedVehicle(vehicles, 0)
    expect(selectedVehicle).toBeUndefined()
  })
  it('returns undefined if the vehicle is not found', () => {
    const selectedVehicle = useSelectedVehicle(vehicles, 7)
    expect(selectedVehicle).toBeUndefined()
  })
  it('returns the selected tag of the vehicle', () => {
    const selectedVehicle = useSelectedVehicle(vehicles, 1)
    expect(selectedVehicle.tag).toEqual('FleetCadillacXts')
  })
})
