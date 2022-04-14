const useNavigation = () => [
  //
  {
    name: 'Home',
    href: '/',
    id: 1,
  },
  {
    name: 'Fleet',
    href: '/fleet/cadillac-xts',
    id: 2,
  },
  {
    name: 'services',
    href: '/services',
    id: 3,
  },
  {
    name: 'About',
    href: '/about',
    id: 4,
  },
  {
    name: 'Contact',
    href: '/contact',
    id: 5,
  },
]
function useOpen() {
  return useState<boolean>('isOpen', () => false)
}

export { useNavigation, useOpen }
