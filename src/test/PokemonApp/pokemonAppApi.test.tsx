import { test, expect, beforeAll, describe, beforeEach } from 'vitest';

import { getNamedAPIResources, getPokemon, getPaginationUrl } from '../../Components/PokemonApp/utils/pokemon';
import { namedAPIResource, pokemon } from '../mocks/apiReturnValues/pokemonApiReturnValues';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
describe('getNamedAPIResources', () => {
  beforeAll(() => {});
  beforeEach(() => {});

  test('NamedAPIResrourceがresultを取ってきているか', async () => {
    const response = await getNamedAPIResources(apiUrl);
    expect(response).toStrictEqual(namedAPIResource.results);
  });
});

describe('getPokemon', () => {
  test('getPokemonが値をとってきているか', async () => {
    const response = await getPokemon('https://pokeapi.co/api/v2/pokemon/1/');
    expect(response).toStrictEqual(pokemon);
  });
});

describe('getPaginationUrl', () => {
  test('次ページのurlを取得しているか', async () => {
    const response = await getPaginationUrl('https://pokeapi.co/api/v2/pokemon');
    expect(response.next).toStrictEqual(namedAPIResource.next);
  });

  test('次ページのurlがnullの時にnextが空文字列になるか', async () => {
    const response = await getPaginationUrl('pokeTailUrl');
    expect(response.next).toStrictEqual('');
  });

  test('前ページのurlを取得しているか', async () => {
    const response = await getPaginationUrl('https://pokeapi.co/api/v2/pokemon?offset=20&limit=2');
    expect(response.previous).toStrictEqual('');
  });

  test('前ページのurlがnullの時にprevが空文字列になるか', async () => {
    const response = await getPaginationUrl('https://pokeapi.co/api/v2/pokemon');
    expect(response.previous).toStrictEqual('');
  });
});
