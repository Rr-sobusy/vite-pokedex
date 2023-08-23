import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PokemonHome } from "./components";
import { getPokemonType } from "./libs/fetcher functions";
import { useNavigate } from "react-router-dom";
// Initial Page
const initialPage = 0;
function App() {
  const navigate = useNavigate();

  // Local states
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  // Fetch Pokemontypes
  const { data: pokemonTypes } = useQuery({
    queryKey: ["pokemonTypes", currentPage],
    queryFn: () => getPokemonType(currentPage),
  });
  const pokemons = pokemonTypes?.map((pokemon, key) => {
    return {
      id: currentPage + key + 1,
      name: pokemon.name,
      types: pokemon.types,
    };
  });

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

  const pokemonClick = (pokemonId: number) => {
  
  };
  return (
    <PokemonHome
      clickHandler={pokemonClick}
      changePageHandler={pageHandler}
      pokemons={pokemons}
    />
  );
}

export default App;
