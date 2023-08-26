export type PokemonType = {
  id: number;
  name:string
  type: string[];
  imgSrc: string;
};

export type GenerationListTypes = {
  generation: string;
  newPokemons: number;
  totalPokemons:number
};
