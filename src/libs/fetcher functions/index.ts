
// Get pokemon datas from API with pagination parameters
export async function getPokemons(page: number) {
  try {
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${page}`
    );
    return pokemons.json();
  } catch (error) {
    console.error(error);
  }
}

// Get pokemon types pokemonId
export async function getPokemonType(pokemonId: number) {
  try {
    const pokemonStats = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    return pokemonStats.json();
  } catch (error) {
    console.error(error);
  }
}
