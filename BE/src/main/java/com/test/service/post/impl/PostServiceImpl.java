package com.test.service.post.impl;

import com.test.model.Post;
import com.test.repository.PostRepository;
import com.test.service.post.PostService;
import com.test.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserService userService;

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Page<Post> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<Post> findAllInput(Pageable pageable, Optional<String> text) {
        return null;
    }

    @Override
    public Post findById(Integer id) {
        return postRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(Post post) {
        postRepository.delete(post);
    }

    @Override
    public void save(Post post) {
        post.setAsk(userService.findById(2));
        post.setPostTime("2021-05-24");
        post.setStatus("1");
        postRepository.save(post);
    }
}
