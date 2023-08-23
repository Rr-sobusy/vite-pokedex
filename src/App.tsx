import { PokemonHome } from "./components";
import { usePokemon } from "./hooks/usePokemon";
const initialPage = 0;
function App() {
  // Local states
  const { data } = usePokemon();
  console.log(data);

  return <PokemonHome pokemons={[]} />;
}

export default App;
