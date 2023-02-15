export interface ICharacter {
  id: number,
  name: string,
  status: string,
  species: string,
  origin: {
    name: string,
  },
  gender?:string,
  location?: {
    name: string,
  },
  url?: string,
  created?:string,
  episode: string[],
  image: string,
}