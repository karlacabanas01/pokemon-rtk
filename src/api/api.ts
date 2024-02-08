// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PokemonListing {
  count: number;
  results: Array<{
    name: string;
    url: string;
  }>;
}

interface PokemonDetailData {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;

  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;

  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    pokemonList: build.query<PokemonListing, void>({
      query() {
        return {
          url: "pokemon",
          params: { limit: 9 },
          method: "GET",
        };
      },
    }),
    pokemonDetail: build.query<PokemonDetailData, { name: string }>({
      query: ({ name }) => `pokemon/${name}/`,
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailQuery } = api;
