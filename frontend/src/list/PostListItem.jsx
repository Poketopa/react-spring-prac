// src/components/list/PostListItem.jsx

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 글 제목 텍스트 스타일링
const TitleText = styled.div`
  font-size: 1.2rem;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const PostListItem = ({ post }) => {
  const navigate = useNavigate();

  // 제목을 클릭하면 해당 글 상세 페이지로 이동
  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  return <TitleText onClick={handleClick}>{post.title}</TitleText>;
};

export default PostListItem;
