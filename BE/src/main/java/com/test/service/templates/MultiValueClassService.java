package com.test.service.templates;

import java.util.List;

public interface MultiValueClassService<T> {
    List<T> findAll();
    T findById(Integer id);
}
