// @/types.ts

export interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface Type {
  type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  url: string;
  favourite: boolean;
  details: {
    sprites: {
      other: {
        "official-artwork": {
          front_shiny: string;
          front_default: string;
        };
      };
    };
    stats: Stat[];
    types: Type[];
  };
}