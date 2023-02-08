export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    origin: {
      name: string,
    },
    location?: {
      name: string,
    }
    episode: string[],
    image: string,
}