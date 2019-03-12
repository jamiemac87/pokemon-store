import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
  readonly baseUrl = `https://pokeapi.co/api/v2`;
  readonly endpoints = {
    get: {
      pokemon: () => `/pokemon`,
    },
  };

  constructor() {}
}
