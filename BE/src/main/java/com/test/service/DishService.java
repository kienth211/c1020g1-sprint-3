package com.test.service;

import com.test.model.Dish;
import com.test.service.templates.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface DishService extends Service<Dish> {
}
