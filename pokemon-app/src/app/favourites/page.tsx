'use client';

import Posts from "@/components/posts";
import { useState, useEffect } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const savedPokemons = localStorage.getItem('pokemons');

    if (savedPokemons) {
      const parsedPokemons: any[] = JSON.parse(savedPokemons);
      const favouritePokemons = parsedPokemons.filter((pokemon: any) => pokemon.favourite);
      setPosts(favouritePokemons);
    }
  }, []);

  const removeFavourite = (pokemon: any) => {
    const updatedPosts = posts.filter((p) => p.url !== pokemon.url);

    const savedPokemons = localStorage.getItem('pokemons');
    if (savedPokemons) {
      const parsedPokemons: any[] = JSON.parse(savedPokemons);
      const updatedPokemons = parsedPokemons.filter((p: any) => p.url !== pokemon.url);

      localStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
    }

    setPosts(updatedPosts);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {/* @ts-ignore */}
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default PostsPage;