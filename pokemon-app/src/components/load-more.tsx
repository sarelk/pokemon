"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components/ui/spinner";
import { fetchPosts } from "@/actions/fetch-posts";
import { Pokemon } from "@/types";
import { Posts } from "@/components/posts";

export function LoadMore() {
  const [posts, setPosts] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMorePosts = async () => {
    await delay(2000);
    const nextPage = page + 1;
    const newPosts = (await fetchPosts(nextPage)) ?? [];
    setPosts((prevProducts: Pokemon[]) => [...prevProducts, ...newPosts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  return (
    <>
      <Posts posts={posts} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
