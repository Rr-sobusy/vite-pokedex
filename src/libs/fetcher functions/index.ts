import { PokemonTypes } from "@/types";


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
export async function getPokemonType(pageNumber: number) {
  try {
    let pokemonTypes: PokemonTypes[] = [];
    const pokemonArray = Array.from({ length: 100 }, (_, index) => index + 1);
    for (const pokemons in pokemonArray) {
      const pokemonType = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${Number(pokemons) + 1 + pageNumber}`
      );
      const type = await pokemonType?.json();
      pokemonTypes.push({
        name: type.species.name,
        types: type.types.map(
          (val: { type: { name: string } }) => val.type.name
        ),
      });
    }
    console.log("rendered")
    return pokemonTypes;
  } catch (error) {
    console.error(error);
  }
}
