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
export async function getPokemonType() {
  try {
    let pokemonTypes: object[] = [];
    const pokemonArray = Array.from({ length: 100 }, (_, index) => index + 1);
    for (const pokemons in pokemonArray) {
      const pokemonType = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Number(pokemons) + 1}`
      );
      const type = await pokemonType?.json();
      pokemonTypes.push({
        id: Number(pokemons) + 1,
        name: type.species.name,
        types: type.types.map(
          (val: { type: { name: string } }) => val.type.name
        ),
      });
    }
    return pokemonTypes;
  } catch (error) {
    console.error(error);
  }
}
