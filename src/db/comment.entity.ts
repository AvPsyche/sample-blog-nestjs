import { Blog } from "./blog.entitiy";
let counter = 0;

export class Comment {
  id: number;
  text: string;
  blogPost: Blog;

  constructor(text: string) {
    this.text = text;
    this.id = ++counter
  }
}