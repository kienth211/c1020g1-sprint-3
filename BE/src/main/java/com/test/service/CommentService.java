package com.test.service;
import com.test.model.Comment;

import java.util.List;

public interface CommentService {

    void createComment(Comment comment);

    Comment getCommentById(Integer commentId);

    List<Comment> getCommentByDishId(Integer productId);

    void updateComment(Comment comment);

    void deleteCommentById(Integer commentId);

    String decodeString(String string);

    String encodeString(String string);

    Comment getRecentComment(Integer productId);
}
