import { Blog } from "./blog.entitiy";

export class Comment {
  id: number;
  text: string;
  blogPost: Blog;

  constructor(text: string) {
    this.text = text;
    this.id = Date.now();
  }
}