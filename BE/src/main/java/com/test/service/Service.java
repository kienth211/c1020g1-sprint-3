package com.test.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface Service<T> {
    List<T> findAll();
    Page<T> findAll(Pageable pageable);
    Page<T> findAllInput(Pageable pageable, Optional<String> text);
    T findById(Integer id);
    void delete(T t);
    void save(T t);
}
