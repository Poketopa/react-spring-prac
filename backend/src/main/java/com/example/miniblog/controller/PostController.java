package com.example.miniblog.controller;

import com.example.miniblog.domain.Post;
import com.example.miniblog.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    // 글 작성
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.save(post);
    }

    // 전체 글 목록 조회
    @GetMapping
    public List<Post> getAllPosts() {
        return postService.findAll();
    }

    // 특정 글 상세 조회
    @GetMapping("/{id}")
    public Post getPost(@PathVariable Long id) {
        return postService.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 글이 없습니다: " + id));
    }
}