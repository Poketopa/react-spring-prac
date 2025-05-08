// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 💡 올바른 경로로 수정 (pages 폴더는 src/pages)
import MainPage from "./pages/MainPage";
import PostWritePage from "./pages/PostWritePage";
import PostViewPage from "./pages/PostViewPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", maxWidth: "720px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>📝 나만의 미니 블로그</h1>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<PostWritePage />} />
          <Route path="/post/:postId" element={<PostViewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
