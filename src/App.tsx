import { useState } from "react";
import { PokemonHome } from "./components";
import { GenerationList } from "./libs/utils";
import { GenerationListTypes } from "./types";
import { usePokemon } from "./hooks/usePokemon";

type Props = {};

const App = (props: Props) => {
  // Local states
  const [generations, setGenerations] = useState<GenerationListTypes>(
    GenerationList[0]
  );

  // Custom hook for rendering pokemon stats
  const { pokemonDatas } = usePokemon({ generation: generations });
  const changePageHandler = (e: string) => {
    const selectedGeneration = GenerationList.findIndex(
      (i) => i.generation === e
    );
    setGenerations(GenerationList[selectedGeneration]);
  };

  const edited = pokemonDatas?.map(({ sprites }) => {
      return sprites.other
  });

  console.log(edited[0]);
  return (
    <>
      <PokemonHome
        changePageHandler={changePageHandler}
        generationList={GenerationList}
        pokemons={[]}
      />
    </>
  );
};

export default App;
