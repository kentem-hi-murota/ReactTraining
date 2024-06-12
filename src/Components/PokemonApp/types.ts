export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Pokemon {
  // species: NamedAPIResource;
  id: number;
  name: string;
  types: PokemonType[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  sprites: { front_default: string };
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
