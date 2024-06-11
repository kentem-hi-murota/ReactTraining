import type { NamedAPIResource, Pokemon } from "./types";
import { getPokemon } from "./utils/pokemon";
import { useEffect, useState } from "react";

const PokemonApp = () => {
  const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon";

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonData = async (url: string) => {
      let response = await getPokemon(url);
      loadPokemon(response.results);
      setLoading(false);
    };
    fetchPokemonData(pokemonApiUrl);
  }, []);

  const loadPokemon = async (data: NamedAPIResource[]) => {
    /// Promise[]を引数にする。
    let _pokemonData = await Promise.all(
      data.map((pokemon: NamedAPIResource) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <>
      <h1>Pokemon</h1>
      {loading ? <div>Loading...</div> : <div>Loaded.</div>}
    </>
  );
};

export default PokemonApp;
