import { Pokemon } from "@/types";

interface PokemonWithDetails extends Pokemon {
  details: any;
}

export async function fetchPosts(page: number): Promise<PokemonWithDetails[] | null> {
  const perPage = 20;
  const offset = (perPage * page) - perPage;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const pokemonList = data?.results as Pokemon[];

    // Fetch details for each Pokémon
    const combinedData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const detailsResponse = await fetch(pokemon.url);
        const details = await detailsResponse.json();
        
        return {
          name: pokemon.name,
          url: pokemon.url,
          details,
          favourite: false,
        };
      })
    );

    return combinedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}