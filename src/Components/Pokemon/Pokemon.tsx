import { getAllPokemon } from "./utils/pokemon";

import { useEffect } from "react";

const Pokemon = () => {
  const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async (url: string) => {
      let response = await getAllPokemon(url);
      console.log(response);
    };
    fetchPokemonData(pokemonApiUrl);
  }, []);
  return (
    <>
      <h1>Pokemon</h1>
    </>
  );
};

export default Pokemon;
