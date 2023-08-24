import { useQuery } from "@tanstack/react-query";
import { GenerationListTypes } from "@/types";

export interface PokemonType {
  id: number;
  name: string;
  type: string[];
  imgUrl: string;
}

// Hook for fetching datas from api and set id,name,type,imgUrl
export const usePokemon = ({
  generation,
}: {
  generation: GenerationListTypes;
}) => {
  const { data } = useQuery({
    queryKey: ["pokemons", generation],
    queryFn: async () => {
      // Fetch pokemon details per generation
      const pokemonDatas = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${
          generation.newPokemons
        }&offset=${generation.totalPokemons - generation.newPokemons}`
      );
      const result = await pokemonDatas.json();

      // Fetch pokemon stats per generation by iterating API url of each pokemon
      const pokemonListArray = result.results?.map(
        async (pokemon: { url: string }) => {
          const pokemonPromise = await fetch(pokemon.url);
          return pokemonPromise.json();
        }
      );
      return Promise.all(pokemonListArray);
    },
    refetchOnWindowFocus: false,
  });
  return {
    data,
  };
};
