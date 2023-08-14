import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PokemonHome } from "./components";
import { getPokemons, getPokemonType } from "./libs/fetcher functions";

// Initial Page
const initialPage = 0;
function App() {
  // Local states
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  // Fetch Pokemontypes
  const { data: pokemonTypes } = useQuery({
    queryKey: ["pokemonTypes"],
    queryFn: () => getPokemonType(),
  });
  console.log(pokemonTypes);

  // Fetch Pokemons
  const { data: pokemonData } = useQuery({
    queryKey: ["pokemonLists", currentPage],
    queryFn: () => getPokemons(currentPage),
  });
  const pokemons = pokemonData?.results.map(
    (pokemon: { name: string }, index: number) => {
      return {
        id: index + currentPage + 1,
        name: pokemon.name,
      };
    }
  );

  // Fetch Pokemon types

  const pageHandler = (pageNumber: number) => {
    setCurrentPage(() => {
      return pageNumber === 1
        ? 0
        : pageNumber === 2
        ? 100
        : pageNumber === 3
        ? 200
        : pageNumber === 4
        ? 300
        : pageNumber === 5
        ? 400
        : pageNumber === 6
        ? 500
        : pageNumber === 7
        ? 600
        : pageNumber === 8
        ? 700
        : pageNumber === 9
        ? 800
        : 0;
    });
  };
  return <PokemonHome changePageHandler={pageHandler} pokemons={pokemons} />;
}

export default App;
