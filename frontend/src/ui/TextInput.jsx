// src/components/ui/TextInput.jsx

import React from "react";
import styled from "styled-components";

// 스타일이 적용된 textarea 컴포넌트 정의
const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  box-sizing: border-box;
`;

// 재사용 가능한 텍스트 입력 컴포넌트
// props:
//   - height: 높이(px 단위)
//   - value: 현재 입력된 값
//   - onChange: 값이 변경될 때 호출되는 함수
const TextInput = ({ height = 100, value, onChange }) => {
  return (
    <StyledTextarea
      style={{ height: `${height}px` }}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
