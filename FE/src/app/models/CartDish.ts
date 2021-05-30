import {Dish} from './Dish';
import {Cart} from './Cart';

export class CartDish {
  id: number;
  dish: Dish;
  cart: Cart;
  dishAmountOrdered: number;

  constructor(dish, cart, dishAmountOrdered) {
    this.dish = dish;
    this.cart = cart;
    this.dishAmountOrdered = dishAmountOrdered;
  }
}
