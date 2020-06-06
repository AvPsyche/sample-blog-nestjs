import { Comment } from "./comment.entity";
let counter = 0;

export class Blog {
  title: string;
  body: string;
  id: number;
  comments: Comment[];

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.id = ++counter
  }
}