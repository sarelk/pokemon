import { Pokemon } from "@/types";
import Card from "@/components/ui/card";

export interface PostProps {
  posts: Pokemon[] | null;
}

export function Posts({ posts }: PostProps) {
  return (
    <>
      {posts ? (
        posts.map((pokemon) => (
          <Card item={pokemon} key={pokemon.details.id}/>
        ))
      ) : (
        <div className="text-xl font-bold">Sorry, No Pokemnos available </div>
      )}
    </>
  );
}
