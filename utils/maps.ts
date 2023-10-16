import type { Status } from '~/types'

export const statusColorMap: Record<Status, string> = {
  Alive: 'bg-green-light',
  Dead: 'bg-red-500',
  unknown: 'bg-gray-500',
}
