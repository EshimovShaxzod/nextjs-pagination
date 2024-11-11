import React from "react";
import PostList from "./post-list";
import { fetchPosts } from "@/lib/api";
import { PaginationWithLinks } from "./ui/pagination-with-links";

interface homeProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Posts({ searchParams }: homeProps) {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const postsPerPage = parseInt((searchParams.pageSize as string) || "5");

  const { posts, totalPosts } = await fetchPosts(currentPage, postsPerPage);

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold my-6 text-[red] text-center">Posts</h1>
      <PostList posts={posts} />
      <div className="mt-4">
        <PaginationWithLinks
          page={currentPage}
          pageSize={postsPerPage}
          totalCount={totalPosts}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10, 15, 20],
          }}
        />
      </div>
    </div>
  );
}
