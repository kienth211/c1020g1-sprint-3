package com.test.service.impl;

import com.test.model.Comment;
import com.test.repository.CommentRepository;
import com.test.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Override
    @Transactional
    public void createComment(Comment comment) {
        commentRepository.createComment(comment.getContent(), comment.getImage(), comment.getDish().getId(),
                comment.getUser().getUserId(), comment.getCommentTime());
    }

    @Override
    public Comment getCommentById(Integer commentId) {
        return commentRepository.getCommentById(commentId);
    }

    @Override
    public List<Comment> getCommentByDishId(Integer productId) {
        return commentRepository.getAllCommentByDishId(productId);
    }

    @Override
    @Transactional
    public void updateComment(Comment comment) {
        commentRepository.editComment(comment.getContent(), comment.getImage(), comment.getCommentId());
    }

    @Override
    @Transactional
    public void deleteCommentById(Integer commentId) {
        commentRepository.removeComment(commentId);
    }

    @Override
    public String decodeString(String string) {
        String decodeString = null;
        try {
            decodeString = URLDecoder.decode(string, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            return decodeString;
        }
        return decodeString;
    }

    @Override
    public String encodeString(String string) {
        String encodeString = null;
        try {
            encodeString = URLEncoder.encode(string, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            return encodeString;
        }
        return encodeString;
    }

    @Override
    public Comment getRecentComment(Integer productId) {
        return commentRepository.getRecentComment(productId);
    }
}
