package com.test.controller;

import com.test.model.Comment;
import com.test.model.Dish;
import com.test.service.CommentService;
import com.test.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private DishService dishService;

    @GetMapping("/dish/{dishId}")
    public ResponseEntity<List<Comment>> getAllCommentByDishId(@PathVariable("dishId") Integer dishId) {
        try {
            Dish dish = dishService.findById(dishId);
            if (dish == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            List<Comment> commentList = commentService.getCommentByDishId(dishId);

            if (commentList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                for (Comment comment : commentList) {
                    comment.setContent(commentService.decodeString(comment.getContent()));
                }
                return new ResponseEntity<>(commentList, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<Comment> getCommentByCommentId(@PathVariable("commentId") Integer commentId) {
        try {
            Comment comment = commentService.getCommentById(commentId);
            if (comment == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            } else {
                comment.setContent(commentService.decodeString(comment.getContent()));
                return new ResponseEntity<>(comment, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("")
    @Transactional
    public ResponseEntity<Comment> createComment(@Validated @RequestBody Comment comment, BindingResult bindingResult) {
        try {
            comment.setCommentTime(new Timestamp(System.currentTimeMillis()));
            if (bindingResult.hasErrors()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            } else {
                comment.setContent(commentService.encodeString(comment.getContent()));
                commentService.createComment(comment);
                Comment commentRecent = commentService.getRecentComment(comment.getDish().getId());
                return new ResponseEntity<>(commentRecent, HttpStatus.CREATED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/edit/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable("commentId") Integer commentId,
                                                 @Validated @RequestBody Comment comment, BindingResult bindingResult) {
        try {
            Comment commentTempt = commentService.getCommentById(commentId);
            if (commentTempt == null || bindingResult.hasErrors()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            } else {
                comment.setContent(commentService.encodeString(comment.getContent()));
                commentService.updateComment(comment);
                return new ResponseEntity<>(comment, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @DeleteMapping("/delete/{commentId}")
    public ResponseEntity<Comment> deleteComment(@PathVariable("commentId") Integer commentId) {
        try {
            Comment comment = commentService.getCommentById(commentId);
            if (comment == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            } else {
                commentService.deleteCommentById(commentId);
                return new ResponseEntity<>(comment, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
