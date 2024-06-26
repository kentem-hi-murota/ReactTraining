// @vitest-environment jsdom
import { describe, expect, test } from 'vitest';
// import { render, screen } from '@testing-library/react';
import { getNamedAPIResources, getPokemon, getPaginationUrl } from '../../Components/PokemonApp/utils/pokemon';
// import { Button, Card, PaginationButtons } from '../../Components/PokemonApp/Components/index';

describe('getNamedAPIResource', async () => {
  const response = await getNamedAPIResources('https://pokeapi.co/api/v2/pokemon');

  test('レスポンスの中身の最初が一致しているか', () => {
    expect(response[0].name).toBe('bulbasaur');
    expect(response[0].url).toBe('https://pokeapi.co/api/v2/pokemon/1/');
  });

  test('レスポンスの中身の長さが20', () => {
    expect(response.length).toBe(20);
  });
});

describe('getPokemon', async () => {
  const response = await getPokemon('https://pokeapi.co/api/v2/pokemon/1/');

  test('レスポンスの中身のidとheightが一致', () => {
    expect(response.id).toBe(1);
    expect(response.height).toBe(7);
  });
});

describe('getPaginationUrl', async () => {
  const response = await getPaginationUrl('https://pokeapi.co/api/v2/pokemon');

  test('レスポンスの中身が正しい', () => {
    expect(response.previous).toBe('');
    expect(response.next).toBe('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
  });
});

// describe('button', () => {
//   render(<Button buttonText={'test'} clickHandler={() => {}} />);
//   const target = screen.getByRole('button');
//   expect(target).toBeInTheDocument();
// });
