package com.test.service.impl;

import com.test.model.Dish;
import com.test.service.DishService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DishServiceImpl implements DishService {
    @Override
    public List<Dish> findAll() {
        return null;
    }

    @Override
    public Page<Dish> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<Dish> findAllInput(Pageable pageable, Optional<String> text) {
        return null;
    }

    @Override
    public Dish findById(Integer id) {
        return null;
    }

    @Override
    public void delete(Dish dish) {

    }

    @Override
    public void save(Dish dish) {

    }
}
