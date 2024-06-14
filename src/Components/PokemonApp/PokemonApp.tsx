import type { NamedAPIResource, Pokemon, PaginationUrl } from "./types";
import {
  getNamedAPIResources,
  getPokemon,
  getPaginationUrl,
} from "./utils/pokemon";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

import { Card, PaginationButtons } from "./Components";

const PokemonApp = () => {
  const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon";

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [currentUrl, setCurrentUrl] = useState<string>(pokemonApiUrl);
  const [paginationUrl, setPaginationUrl] = useState<PaginationUrl>({
    next: "",
    previous: "",
  });

  useEffect(() => {
    const fetchPokemonData = async (url: string) => {
      const response = await getNamedAPIResources(url);
      loadPokemon(response);
    };
    const fetchPaginationUrl = async (url: string) => {
      const response = await getPaginationUrl(url);
      setPaginationUrl(response);
    };

    setLoading(true);
    fetchPokemonData(currentUrl);
    fetchPaginationUrl(currentUrl);
  }, [currentUrl]);

  const loadPokemon = async (data: NamedAPIResource[]) => {
    /// Promise[]を引数にする。
    const _pokemonData = await Promise.all(
      data.map((pokemon: NamedAPIResource) => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    if (_pokemonData) setPokemonData(_pokemonData);
    setLoading(false); /// pokemonDataの更新を出したタイミング
  };

  return (
    <>
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
            <PaginationButtons
              setCurrentUrl={setCurrentUrl}
              paginationUrl={paginationUrl}
            />
          </>
        )}
      </main>
    </>
  );
};

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
