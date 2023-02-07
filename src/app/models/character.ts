export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    origin: {
      name: string,
    },
    episode: string[],
    image: string,
}