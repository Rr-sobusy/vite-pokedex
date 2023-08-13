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

// Get pokemon images url string
export function getPokemonImgs(pokemonId: number) {
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  return pokemonImg;
}
