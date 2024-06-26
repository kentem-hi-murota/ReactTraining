import { http, HttpResponse } from 'msw';
import {
  namedAPIResource,
  pokemon,
  paginationUrlHead,
  paginationUrlMiddle,
  paginationUrlTail,
} from './apiReturnValues/pokemonApiReturnValues';

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon', () => {
    return HttpResponse.json(namedAPIResource);
  }),

  http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2', () => {
    return HttpResponse.json(paginationUrlHead);
  }),
  http.get('https://pokeapi.co/api/v2/pokemon?offset=500&limit=2', () => {
    return HttpResponse.json(paginationUrlMiddle);
  }),
  http.get('pokeTailUrl', () => {
    return HttpResponse.json(paginationUrlTail);
  }),

  http.get('https://pokeapi.co/api/v2/pokemon/1/', () => {
    return HttpResponse.json(pokemon);
  }),
];
