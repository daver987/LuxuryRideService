export interface Vehicles {
  icon: string
  title: string
  id: number
  tag: string
  to: string
}

export const useFleetTabs = () =>
  [
    {
      icon: 'Fleet-XTS-Continental',
      title: 'Cadillac XTS',
      id: 1,
      tag: 'FleetCadillacXts',
      to: '/fleet',
    },
    {
      icon: 'Fleet-XTS-Continental',
      title: 'Lincoln Continental',
      id: 2,
      tag: 'FleetLincolnContinental',
      to: '/fleet/lincoln-continental',
    },
    {
      icon: 'Fleet-Navigator-Escalade',
      title: 'Cadillac Escalade',
      id: 3,
      tag: 'FleetCadillacEscalade',
      to: '/fleet/cadillac-escalade',
    },
    {
      icon: 'Fleet-Navigator-Escalade',
      title: 'Lincoln Navigator',
      id: 4,
      tag: 'FleetLincolnNavigator',
      to: '/fleet/lincoln-navigator',
    },
    {
      icon: 'Fleet-Tesla',
      title: 'Tesla S',
      id: 5,
      tag: 'FleetTeslaS',
      to: '/fleet/tesla-s',
    },
    {
      icon: 'Fleet-Other',
      title: 'Other',
      id: 6,
      tag: 'FleetOther',
      to: '/fleet/other',
    },
  ] as Vehicles[]
