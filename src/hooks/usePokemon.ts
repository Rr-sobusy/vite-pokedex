import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const usePokemon = () => {
  const { data } = useQuery({
    queryFn: async () => {
      const pokemonDatas: string[] = [];
      const pokemons = Array.from({ length: 100 }).map((_, index) => index++);
      for (const pokemon in pokemons) {
        try {
          const pokemonss = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${Number(pokemon) + 1}`
          );
          const types = await pokemonss.json();
          const type = types.types.map(
            (i: { type: { name: string } }) => i.type.name
          );
          pokemonDatas.push(type);
        } catch (error) {
          console.error(error);
        }
      }
      return pokemonDatas;
    },
    queryKey: ["pokemons"],
    refetchOnWindowFocus: false,
  });
  return {
    data,
  };
};
