package com.example.miniblog.service;

import com.example.miniblog.domain.Comment;
import com.example.miniblog.domain.Post;
import com.example.miniblog.repository.CommentRepository;
import com.example.miniblog.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    public Comment addComment(Long postId, Comment comment) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 글이 없습니다: " + postId));
        comment.setPost(post);
        return commentRepository.save(comment);
    }
}