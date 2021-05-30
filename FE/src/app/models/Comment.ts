import {Dish} from './Dish';
import {User} from './User';

export class Comment {
  commentId: number;
  content: string;
  image: string;
  commentTime: string;
  dish: Dish;
  user: User;
}
