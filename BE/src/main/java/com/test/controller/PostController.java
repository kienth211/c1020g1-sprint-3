package com.test.controller;

import com.test.model.Post;
import com.test.service.post.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping("")
    public ResponseEntity<?> showAllPost() {
        try {
            List<Post> listPost = postService.findAll();
            return new ResponseEntity<>( listPost, HttpStatus.OK );
        } catch (Exception e) {
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPost(@PathVariable("id") Integer id) {
        try {
            Post post = postService.findById(id);
            return new ResponseEntity<>( post, HttpStatus.OK );
        } catch (Exception e) {
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Post> createPost(@Valid @RequestBody Post post, BindingResult bindingResult){
        try{
            if (bindingResult.hasErrors())
                return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
            postService.save(post);
            return new ResponseEntity<>( HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("")
    public ResponseEntity<Post> editPost(@Valid @RequestBody Post post, BindingResult bindingResult){
        System.out.println(post);
        try{
            if (bindingResult.hasErrors())
                return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
            postService.save(post);
            return new ResponseEntity<>( HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("")
    public ResponseEntity<Post> deletePost(@RequestParam("id") Integer id){
        try{
            postService.delete(postService.findById(id));
            return new ResponseEntity<>( HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
