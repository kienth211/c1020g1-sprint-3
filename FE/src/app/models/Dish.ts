import {Category} from './Category';

export class Dish {
  id: number;
  name: string;
  description: string;
  amount: number;
  vote: number;
  voteCount: number;
  pickCount: number;
  category: Category;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  // constructor(id, name, description, amount, vote, voteCount, pickCount, category) {
  //   this.id = id;
  //   this.name = name;
  //   this.description = description;
  //   this.amount = amount;
  //   this.vote = vote;
  //   this.voteCount = voteCount;
  //   this.pickCount = pickCount;
  //   this.category = category;
  // }
}
