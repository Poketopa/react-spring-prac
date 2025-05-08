import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const PostViewPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  // 글 데이터 불러오기
  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [postId]);

  const handleAddComment = async () => {
    try {
      await axios.post(`http://localhost:8080/posts/${postId}/comments`, {
        content: comment,
      });
      setComment("");
      // 댓글 재로드
      const res = await axios.get(`http://localhost:8080/posts/${postId}`);
      setPost(res.data);
    } catch (e) {
      alert("댓글 작성 실패");
    }
  };

  if (!post) return <div style={{ padding: "20px" }}>로딩 중...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <h3>💬 댓글</h3>
      <CommentList comments={post.comments} />

      <TextInput
        height={60}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button title="댓글 작성" onClick={handleAddComment} />
    </div>
  );
};

export default PostViewPage;
