// src/components/ui/Button.jsx

import React from "react";
import styled from "styled-components";

// 스타일이 적용된 버튼 컴포넌트 정의
const StyledButton = styled.button`
  padding: 10px 16px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 재사용 가능한 버튼 컴포넌트
// props: title - 버튼에 표시할 텍스트
//        onClick - 클릭 시 실행할 함수
const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
