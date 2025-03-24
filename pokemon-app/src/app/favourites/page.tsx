'use client';

import { Posts } from "@/components/posts";
import { useState, useEffect } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const savedPokemons = localStorage.getItem('pokemons');

    if (savedPokemons) {
      const parsedPokemons = JSON.parse(savedPokemons);
      const favouritePokemons = parsedPokemons.filter((pokemon: any) => pokemon.favourite);
      setPosts(favouritePokemons);
    }
  }, [posts]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen ">
      <h1 className="text-3xl font-bold mb-4 text-center">Favourite Pokemon</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default PostsPage;
