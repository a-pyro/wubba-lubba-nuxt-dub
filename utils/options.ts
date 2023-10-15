export interface Option<T extends string> {
  label: string
  value: T
}

export const speciesOptions: Option<string>[] = [
  { label: 'Human', value: 'Human' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Mythological Creature', value: 'Mythological Creature' },
]
