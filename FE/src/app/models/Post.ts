import {User} from './User';

export class Post {
  id: number;
  ask: User;
  answer: User;
  title: string;
  content: string;
  contentAnswer: string;
  postType: string;
  postTime: Date;
  status: string;
}
