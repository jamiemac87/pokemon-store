import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListApiResponse, PokemonApiResponse } from '../api/api.responses';
import { Pokemon, PokemonAdapter } from '../models/pokemon.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  readonly baseUrl = `https://pokeapi.co/api/v2`;
  readonly endpoints = {
    get: {
      pokemon: () => `/pokemon`,
    },
  };

  constructor(private http: HttpClient) {}

  getAllPokemon(limit = 151): Observable<Pokemon[]> {
    return this.http
      .get<PokemonListApiResponse>(`${this.baseUrl}${this.endpoints.get.pokemon()}`, {
        params: {
          limit: limit + '',
        },
      })
      .pipe(
        map(resp => {
          return resp.results.map(result => {
            return {
              name: result.name,
            } as Pokemon;
          });
        })
      );
  }
}
