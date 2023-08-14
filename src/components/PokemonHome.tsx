import React from "react";
import { getPokemonImgs } from "../libs/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  pokemons: any;
  changePageHandler: (event: number) => void;
};

const PokemonHome = (props: Props) => {
  const { pokemons, changePageHandler } = props;
  return (
    <>
      <div className="__main-container">
        <p className="text-white tracking-[6px] font-bold text-[2.5rem] text-center font-['Bitter'] pt-7">
          React Pokedex
        </p>
        <p className="text-white tracking-[6px]  text-sm text-center">
          Let the fun begin!
        </p>
        <Select onValueChange={(e) => changePageHandler(Number(e))}>
          <SelectTrigger value={"rex"} className="w-[180px]">
            <SelectValue placeholder="Select Page" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num: number) => (
              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
            ))}
            {/* <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem> */}
          </SelectContent>
        </Select>
        <div className="__responsive-container">
          {pokemons ? (
            pokemons.map((values: { name: string; id: number, type: string[] }) => (
              <div
                key={values.id}
                className={`grid ${values.type.join(" ")} cursor-pointer hover:scale-105 duration-500 rounded-lg            
              `}
              >
                <p className="text-white text-lg absolute ml-3 mt-2">{`${values.id}`}</p>
                <img
                  className="justify-self-center h-[250px] w-[250px]"
                  alt=""
                  src={getPokemonImgs(values.id)}
                />
                <p className="text-center tracking-[7px] mb-4 font-sans font-semibold text-white capitalize text-2xl">
                  {values.name}
                </p>
                <p className="text-center mb-4 font-sans font-semibold text-white capitalize text-md">
                  {values.type.join(" ")}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white text-center">Loading Pokemons ...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonHome;
