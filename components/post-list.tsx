import { Post } from "@/lib/types";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface postProps {
  posts: Post[];
}

const PostList = ({ posts }: postProps) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{`${post.title} (post ${post.id})`}</CardTitle>
          </CardHeader>
          <CardContent>{post.body}</CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
