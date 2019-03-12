import { PokemonApiResponse, PokemonApiType, PokemonApiMove } from '../api/api.responses';

export interface Pokemon {
  name: string;
  id?: number;
  image?: string;
  types?: PokemonTypes[];
  moves?: PokemonMove[];
}

export enum PokemonTypes {
  Normal = 'normal',
  Fighting = 'fighting',
  Flying = 'flying',
  Poison = 'poison',
  Ground = 'ground',
  Rock = 'rock',
  Bug = 'bug',
  Ghost = 'ghost',
  Steel = 'steel',
  Fire = 'fire',
  Water = 'water',
  Grass = 'grass',
  Electric = 'electric',
  Psychic = 'psychic',
  Ice = 'ice',
  Dragon = 'dragon',
  Dark = 'dark',
  Fairy = 'fairy',
  Unknown = 'unknown',
  Shadow = 'shadow',
}

export interface PokemonMove {
  name: string;
  levelLearnedAt: number;
}

export class PokemonAdapter {
  static adapt(apiResponse: PokemonApiResponse): Pokemon {
    return {
      id: apiResponse.id,
      name: apiResponse.name,
      image: apiResponse.sprites.front_default,
      types: this.parseTypes(apiResponse.types),
      moves: this.parseMoves(apiResponse.moves),
    };
  }

  static parseTypes(types: PokemonApiType[]): PokemonTypes[] {
    return types.map(type => {
      const capitalizedTypeName = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
      return PokemonTypes[capitalizedTypeName];
    });
  }

  static parseMoves(moves: PokemonApiMove[]): PokemonMove[] {
    return moves.reduce<PokemonMove[]>((acc, curr) => {
      const version = curr.version_group_details.find(group => group.version_group.name === 'red-blue');

      if (version === undefined) {
        return acc;
      }

      if (version.level_learned_at === 0) {
        return acc;
      }

      acc.push({
        name: curr.move.name,
        levelLearnedAt: version.level_learned_at,
      });

      return acc;
    }, []);
  }
}
