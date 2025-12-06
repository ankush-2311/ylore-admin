import type { StaticImageData } from 'next/image'

export interface SidenavDataType {
  id: number
  name: string
  path: string
  selectedLogo: string
  logo: string
  isSubRoute: boolean
}

export interface NavItemTypes {
  id: number | string
  name: string
  path: string
  logo: StaticImageData
  selectedLogo: StaticImageData
  hasSubRoute: boolean
  isSubRoute: boolean
  children?: subNavItemTypes[]
}

interface subNavItemTypes {
  id: number | string
  name: string
  path: string
  logo: StaticImageData
  selectedLogo: StaticImageData
  isSubRoute: boolean
  hasSubRoute: boolean
}
