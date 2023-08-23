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
  

  const pokemonClick = (pokemonId: number) => {
  
  };
  return (
    <PokemonHome
      pokemons={[]}
    />
  );
}

export default App;
