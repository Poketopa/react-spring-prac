import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from "axios";

const PostWritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/posts", { title, content });
      navigate("/");
    } catch (e) {
      alert("글 작성에 실패했습니다.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🖋 글 작성</h2>
      <p>제목</p>
      <TextInput
        height={40}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>내용</p>
      <TextInput
        height={200}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button title="작성 완료" onClick={handleSubmit} />
    </div>
  );
};

export default PostWritePage;
