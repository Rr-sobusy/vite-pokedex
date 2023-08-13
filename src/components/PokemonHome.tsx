import React from "react";
import { getPokemonImgs } from "../libs/fetcher functions";

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
          Rex Pokedex
        </p>
        <p className="text-white tracking-[6px]  text-sm text-center">
          Let the fun begin!
        </p>
        <select
          onChange={(e) => changePageHandler(Number(e.target.value))}
          className="select select-lg select-primary select-bordered w-full h-4 max-w-xs"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((number: number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <div className="__responsive-container">
          {pokemons ? (
            pokemons.map((values: { name: string; id: number }) => (
              <div
                key={values.id}
                className={`grid cursor-pointer hover:scale-105 duration-500 rounded-lg            
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
                <p className="text-center mb-4 font-sans font-semibold text-white capitalize text-md"></p>
              </div>
            ))
          ) : (
            <p className="text-white">Loading</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonHome;
