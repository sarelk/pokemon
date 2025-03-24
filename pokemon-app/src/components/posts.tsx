'use client';

import { Pokemon } from "@/types";
import Card from "@/components/ui/card";
import { useState, useEffect } from "react";

export interface PostProps {
  posts: Pokemon[] | null;
  onClick?: () => void;
}

export function Posts({ posts }: PostProps) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    setPokemons(posts);
  }, [posts]);

  const setFavourite = (pokemon: Pokemon) => {
    if (pokemons) {
      const updatedPokemons = pokemons.map((p) =>
        p.url === pokemon.url ? { ...p, favourite: !p.favourite } : p
      );
      setPokemons(updatedPokemons);
      const stringifyPokemons = JSON.stringify(updatedPokemons);
      localStorage.setItem('pokemons', stringifyPokemons);
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
        ''
      )}
    </>
  );
}