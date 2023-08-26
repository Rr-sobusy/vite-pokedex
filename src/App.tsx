import { useState } from "react";
import { PokemonHome } from "./components";
import { GenerationList } from "./libs/utils";
import { GenerationListTypes } from "./types";
import { usePokemon } from "./hooks/usePokemon";
import { useNavigate } from "react-router-dom";

const App = () => {
  //
  const navigatePage = useNavigate();

  // Local states
  const [generations, setGenerations] = useState<GenerationListTypes>(
    GenerationList[0]
  );

  // Custom hook for rendering pokemon stats
  const { pokemonDatas, isLoading } = usePokemon({ generation: generations });

  // Filter the datas to - {id, name , type , imgSrc only}
  const edited = !isLoading
    ? pokemonDatas.map(({ forms, id, types }) => {
        return {
          id: id,
          name: forms[0].name,
          type: types.map(
            ({ type }: { type: { name: string[] } }) => type.name
          ),
          imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        };
      })
    : [];

  // Navigating to pokemon details

  const clickHandler = (pokemonId: number) => {
    navigatePage(`/pokemon/${pokemonId}`);
  };

  // On changing generation

  const changePageHandler = (e: string) => {
    const selectedGeneration = GenerationList.findIndex(
      (i) => i.generation === e
    );
    setGenerations(GenerationList[selectedGeneration]);
  };

  return (
    <>
      <PokemonHome
        isLoading={isLoading}
        clickHandler={clickHandler}
        changePageHandler={changePageHandler}
        generationList={GenerationList}
        pokemons={edited}
      />
    </>
  );
};

export default App;
