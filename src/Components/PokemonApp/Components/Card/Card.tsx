import type { Pokemon } from "../../types";
import { css } from "@emotion/react";

interface CardProps {
  pokemon: Pokemon;
}

const Card = ({ pokemon }: CardProps) => {
  return (
    <div key={pokemon.id} css={cardStyle}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      <h2 css={h2Style}>{pokemon.name}</h2>
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
};

const cardStyle = css({
  background: "#F2F2F2",
  borderRadius: "8px",
  width: "240px",
  height: "360px",
  boxShadow: "0 0 16px grey",
});

const h2Style = css({
  margin: 0,
});

export default Card;
