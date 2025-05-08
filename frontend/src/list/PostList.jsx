// src/components/list/PostList.jsx

import React from "react";
import PostListItem from "./PostListItem";

// 글들의 배열을 받아 반복 출력
const PostList = ({ posts }) => {
  if (!Array.isArray(posts)) return null;

  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
