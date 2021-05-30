package com.test.model;

import javax.persistence.*;

@Entity
@Table(name = "cart_dish")
public class CartDish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_dish_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "dish_id", referencedColumnName = "dish_id")
    private Dish dish;

    @ManyToOne
    @JoinColumn(name = "cart_id", referencedColumnName = "cart_id")
    private Cart cart;

    @Column(name = "dish_amount_ordered")
    private Integer dishAmountOrdered;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Dish getDish() {
        return dish;
    }

    public void setDish(Dish dish) {
        this.dish = dish;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public Integer getDishAmountOrdered() {
        return dishAmountOrdered;
    }

    public void setDishAmountOrdered(Integer dishAmountOrdered) {
        this.dishAmountOrdered = dishAmountOrdered;
    }
}
