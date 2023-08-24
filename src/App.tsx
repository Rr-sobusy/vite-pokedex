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
  const { data } = usePokemon({ generation: generations });
  const changePageHandler = (e: string) => {
    const selectedGeneration = GenerationList.findIndex(
      (i) => i.generation === e
    );
    setGenerations(GenerationList[selectedGeneration]);
  };

  console.log(data);
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
