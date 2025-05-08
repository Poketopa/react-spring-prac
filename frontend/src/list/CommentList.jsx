// src/components/list/CommentList.jsx

import React from "react";
import CommentListItem from "./CommentListItem";

// 댓글 배열을 받아 반복 출력
const CommentList = ({ comments = [] }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
