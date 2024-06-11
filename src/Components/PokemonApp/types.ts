export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Pokemon {
  url: string;
  id: number;
  name: string;
  types: PokemonType[];
  weight: number;
  height: number;
  ability: PokemonAbility[];
  frontImgUrl: string;
}

interface PokemonAbility {
  ability: { name: string; url: string };
  isHidden: boolean;
  slot: number;
}

interface PokemonType {
  type: { name: string; url: string };
  slot: number;
}
