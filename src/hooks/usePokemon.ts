import { useQuery } from "@tanstack/react-query";

export interface PokemonType {
  id: number;
  name: string;
  type: string[];
  imgUrl: string;
}

// Hook for fetching datas from api and set id,name,type,imgUrl
export const usePokemon = ({ pageNumber }: { pageNumber: number }) => {
  const { data } = useQuery({
    queryFn: async () => {
      const pokemonDatas: PokemonType[] = [];
      const pokemons = Array.from({ length: 100 }).map(
        (_, index) => index++
      );
      for (const pokemon in pokemons) {
        try {
          const pokemonss = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${Number(pokemon) + 1 + pageNumber}`
          );
          const pokemonApi = await pokemonss.json();
          const type = pokemonApi?.types.map(
            (i: { type: { name: string } }) => i.type.name
          );
          pokemonDatas.push({
            id: Number(pokemon) + pageNumber + 1,
            name: pokemonApi.forms[0].name,
            type: type,
            imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              Number(pokemon) + 1
            }.png`,
          });
        } catch (error) {
          console.error(error);
        }
      }
      return pokemonDatas;
    },
    queryKey: ["pokemons", pageNumber],
    refetchOnWindowFocus: false,
  });
  return {
    data,
  };
};
