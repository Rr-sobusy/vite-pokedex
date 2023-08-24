export type PokemonType = {
  id?: number;
  name: string;
  type: string[];
};

export type GenerationListTypes = {
  generation: string;
  newPokemons: number;
  totalPokemons:number
};
