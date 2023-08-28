import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clsx } from "clsx";
import { PokemonType } from "@/types";
import { GenerationListTypes } from "@/types";
import Pokeball from "../assets/5.png";

type Props = {
  pokemons: PokemonType[];
  changePageHandler: (event: string) => void;
  clickHandler: (pokemonId: number) => void;
  generationList: GenerationListTypes[];
  isLoading: boolean
};

const PokemonHome = (props: Props) => {
  const { pokemons, changePageHandler, clickHandler, generationList, isLoading } = props;
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
          <h3 className="text-sm font-['Bitter'] text-slate-200 font-semibold tracking-[4px]">
            Select Generation
          </h3>
          <Select
            onValueChange={(value) => changePageHandler(value)}
            defaultValue={"I"}
          >
            <SelectTrigger className="w-[250px] bg-slate-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {generationList.map((list, index) => (
                <SelectItem key={index} value={list.generation}>
                  {list.generation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={`__responsive-container ${clsx({ grid: !isLoading })}`}>
          {!isLoading ? (
            pokemons.map((values) => (
              /**************************Pokemon Card************************************8*/
              <div
                onClick={() => clickHandler(values.id)}
                key={values.id}
                className={`grid ${values.type.join(
                  " "
                )} cursor-pointer hover:scale-105 duration-500 rounded-lg            
              `}
              >
                <p className="text-white font-semibold text-lg absolute ml-3 mt-2">{`${values.id}`}</p>
                <img
                  className="justify-self-center h-[250px] w-[250px]"
                  alt=""
                  src={values.imgSrc}
                />
                <p className="text-center tracking-[7px] mb-4 font-sans font-semibold text-white capitalize text-2xl">
                  {values.name}
                </p>
                <div className="flex pb-3 gap-2 justify-center">
                  {values.type.map((values) => {
                    return (
                      <p className="px-4 py-1 tracking-[2px] capitalize text-white font-sans h-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100">
                        {values}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center">
              <p className="text-white animate-spin">
                <img className="w-[90px] h-[90px]" src={Pokeball} />
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonHome;
