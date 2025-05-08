// src/components/list/CommentListItem.jsx

import React from "react";
import styled from "styled-components";

// 댓글 박스 스타일
const CommentBox = styled.div`
  background-color: #f9f9f9;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  font-size: 0.95rem;
`;

const CommentListItem = ({ comment }) => {
  return <CommentBox>{comment.content}</CommentBox>;
};

export default CommentListItem;
