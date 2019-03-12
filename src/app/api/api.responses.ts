export interface PokemonListApiResponse {
  count: number;
  next: string;
  previous?: string;
  results: Resource[];
}

export interface PokemonApiResponse {
  abilities: Ability[];
  base_experience: number;
  forms: Resource[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonApiMove[];
  name: string;
  order: number;
  species: Resource;
  sprites: Sprites;
  stats: Stat[];
  types: PokemonApiType[];
  weight: number;
}

export interface PokemonApiType {
  slot: number;
  type: Resource;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Resource;
}

interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface PokemonApiMove {
  move: Resource;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Resource;
  version_group: Resource;
}

interface GameIndex {
  game_index: number;
  version: Resource;
}

interface Ability {
  ability: Resource;
  is_hidden: boolean;
  slot: number;
}

interface Resource {
  name: string;
  url: string;
}
