import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []); // ✅ 빈 배열 꼭 있어야 함 (처음 마운트 시에만 실행)

  return (
    <div style={{ padding: "20px" }}>
      <h2>📃 글 목록</h2>
      <Button title="글 작성하기" onClick={() => navigate("/write")} />
      <PostList posts={posts} />
    </div>
  );
};

export default MainPage;
