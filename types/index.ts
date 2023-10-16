export type Status = 'Alive' | 'Dead' | 'unknown'

export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown'

export interface Character {
  /** The id of the character. */
  id: number
  /** The name of the character. */
  name: string
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: Status
  species: string
  /** The type or subspecies of the character. */
  type: string
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: Gender
  origin: {
    name: string
    url: string
  }
  /** Name and link to the character's last known location endpoint. */
  location: {
    name: string
    url: string
  }
  /** Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars. */
  image: string
  /** List of episodes in which this character appeared. */
  episode: string[]
  /** Link to the character's own URL endpoint. */
  url: string
  /** Time at which the character was created in the database. */
  created: string
}

export interface GetListResponse<T> {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: T[]
}

export interface CharacterListResponse extends GetListResponse<Character> {}

export interface FilterQuery {
  gender?: Gender
  status?: Status
  species?: string
  name?: string
}
