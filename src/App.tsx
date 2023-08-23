import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151'); // Fetching first 151 Pokémon for example
        const results = response.data.results;
        
        // Fetch additional details for each Pokémon
        const pokemonDataPromises = results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return response.data;
        });
        
        const pokemonData = await Promise.all(pokemonDataPromises);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPokemonData();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <strong>{pokemon.name}</strong> - Types: {pokemon.types.map(type => type.type.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
