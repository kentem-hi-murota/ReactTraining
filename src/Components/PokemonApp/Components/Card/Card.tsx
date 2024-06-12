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
      <div css={typeStyle}>
        <span css={css({ textAlign: "right", alignContent: "center" })}>
          タイプ：
        </span>
        <span css={css({ textAlign: "left" })}>
          {pokemon.types[0].type.name} <br />
          {pokemon.types[1] && pokemon.types[1].type.name}
        </span>
      </div>
      <p>たかさ：{(pokemon.height / 10).toFixed(1)} m</p>
      <p>おもさ：{(pokemon.weight / 10).toFixed(1)} kg</p>
      <p>とくせい：{pokemon.abilities[0].ability.name}</p>
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

const typeStyle = css({
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap:'0.2em'
});

export default Card;
