import {User} from './User';

export class Cart {
  id: number;
  user: User;

  constructor(id, user) {
    this.id = id;
    this.user = user;
  }
}
