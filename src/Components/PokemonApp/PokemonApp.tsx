import type { NamedAPIResource, Pokemon } from "./types";
import { getNamedAPIResources, getPokemon } from "./utils/pokemon";
import { useEffect, useState } from "react";
import { css, Global } from "@emotion/react";

import { Card, PaginationButtons } from "./Components";

const PokemonApp = () => {
  const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon";

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonData = async (url: string) => {
      let response = await getNamedAPIResources(url);
      loadPokemon(response);
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
    if (_pokemonData) setPokemonData(_pokemonData);
    setLoading(false); /// pokemonDataの更新を出したタイミング
  };

  return (
    <>
      <Global styles={pokemonGlobalStyle} />
      <header css={headerStyle}>
        <h1>Pokemon</h1>
      </header>
      <main>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <section css={cardListStyle}>
              {pokemonData.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
              ))}
            </section>
            <PaginationButtons />
          </>
        )}
      </main>
    </>
  );
};

const pokemonGlobalStyle = css({
  body: {
    background: "#FDD000",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    margin: "0",
  },
});

const headerStyle = css({
  background: "white",
  padding: "8px 0",

  h1: {
    margin: 0,
  },
});

const cardListStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  placeItems: "center",
  gap: "20px",
  marginTop: "20px",
});

export default PokemonApp;
