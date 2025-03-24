'use client';

import { Pokemon } from "@/types";
import Card from "@/components/ui/card";
import { useState } from "react";

export interface PostProps {
  posts: Pokemon[] | null;
}

export function Posts({ posts }: PostProps) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(posts);

  const setFavourite = (pokemon: Pokemon) => {
    if (pokemons) {
      const updatedPokemons = pokemons.map((p) =>
        p.url === pokemon.url ? { ...p, favourite: !p.favourite } : p
      );
      setPokemons(updatedPokemons);
    }
  };

  return (
    <>
      {pokemons && pokemons.length > 0 ? (
        pokemons.map((pokemon: Pokemon) => (
          <Card 
            item={pokemon} 
            key={pokemon.url} 
            onClick={() => setFavourite(pokemon)}
          />
        ))
      ) : (
        <div className="text-xl font-bold">Sorry, No Pokemnos available </div>
      )}
    </>
  );
}