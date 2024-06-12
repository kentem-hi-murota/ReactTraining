import type { Pokemon } from "../../types";

interface CardProps {
  pokemonData: Pokemon[];
}

const Card = ({ pokemonData }: CardProps) => {
  return (
    <div>
      {pokemonData.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.sprites.front_default}></img>
            <h2>{pokemon.name}</h2>
            <p>
              タイプ <br />
              {pokemon.types[0].type.name} <br />
              {pokemon.types[1] && pokemon.types[1].type.name}
            </p>
            <p>重さ：{pokemon.weight}</p>
            <p>高さ：{pokemon.height}</p>
            <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
