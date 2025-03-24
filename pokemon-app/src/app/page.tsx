import { fetchPosts } from "@/actions/fetch-posts";
import { LoadMore } from "@/components/load-more";
import Posts from "@/components/posts";

const PostsPage = async () => {
  const posts = await fetchPosts(1);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {/* @ts-ignore */}
        <Posts posts={posts} />
        <LoadMore />
      </div>
    </div>
  );
};

export default PostsPage;
