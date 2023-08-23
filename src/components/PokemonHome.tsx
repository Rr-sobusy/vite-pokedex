import { getPokemonImgs } from "../libs/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clsx } from "clsx";
import { PokemonTypes } from "@/types";

type Props = {
  pokemons: PokemonTypes[];
  changePageHandler?: (event: number) => void;
  clickHandler?: (pokemonId: number | undefined) => void;
};

const POKEMON_PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PokemonHome = (props: Props) => {
  const { pokemons, changePageHandler, clickHandler } = props;
  return (
    <>
      <div className="__main-container ">
        <p className="text-white tracking-[6px] font-bold text-[2.5rem] text-center font-['Bitter'] pt-7">
          React Pokedex
        </p>
        <p className="text-white tracking-[6px]  text-sm text-center">
          Let the fun begin!
        </p>
        <div className="flex mt-8 mb-3 flex-col gap-2 items-center">
          <h3 className="text-md font-['Bitter'] text-slate-200 font-semibold tracking-[4px]">
            Select Page
          </h3>
          <Select defaultValue={"1"}>
            <SelectTrigger className="w-[250px] bg-slate-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {POKEMON_PAGES.map((num: number) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={`__responsive-container ${clsx({ grid: pokemons })}`}>
          {pokemons ? (
            pokemons.map((values) => (
              <div
                key={values.id}
                className={`grid ${values.types.join(
                  " "
                )} cursor-pointer hover:scale-105 duration-500 rounded-lg            
              `}
              >
                <p className="text-white font-semibold text-lg absolute ml-3 mt-2">{`${values.id}`}</p>
                <img
                  className="justify-self-center h-[250px] w-[250px]"
                  alt=""
                  src={getPokemonImgs(Number(values.id))}
                />
                <p className="text-center tracking-[7px] mb-4 font-sans font-semibold text-white capitalize text-2xl">
                  {values.name}
                </p>
                <p className="text-center mb-4 font-sans font-semibold text-white capitalize text-md">
                  {values.types.join(" ")}
                </p>
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center">
              <p className="text-white animate-pulse">Loading pokemons ...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonHome;
