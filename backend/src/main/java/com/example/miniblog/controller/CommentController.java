package com.example.miniblog.controller;

import com.example.miniblog.domain.Comment;
import com.example.miniblog.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts/{postId}/comments")
public class CommentController {

    private final CommentService commentService;

    // 댓글 작성
    @PostMapping
    public Comment addComment(@PathVariable Long postId, @RequestBody Comment comment) {
        return commentService.addComment(postId, comment);
    }
}