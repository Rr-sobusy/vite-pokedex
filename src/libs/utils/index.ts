
// Get pokemon images url string
export function getPokemonImgs(pokemonId: number) {
    const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    return pokemonImg;
  }
  