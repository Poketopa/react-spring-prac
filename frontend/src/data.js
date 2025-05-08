// src/data.js

// 실제 서버가 없기 때문에 사용할 가짜 데이터입니다
// 각 글(post)에는 id, title, content, comments가 포함됩니다

export const posts = [
  {
    id: 1,
    title: "리액트 입문하기",
    content: "이 글은 리액트를 처음 시작하는 사람을 위한 글입니다.",
    comments: [
      { id: 1, content: "너무 쉽게 설명해주셔서 좋아요!" },
      { id: 2, content: "감사합니다. 큰 도움이 되었어요." },
    ],
  },
  {
    id: 2,
    title: "컴포넌트란 무엇인가?",
    content: "컴포넌트는 리액트에서 UI를 구성하는 독립적인 단위입니다.",
    comments: [{ id: 3, content: "컴포넌트 개념을 확실히 잡았어요." }],
  },
];
