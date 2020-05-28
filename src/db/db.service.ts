import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entitiy';
import { Comment } from './comment.entity';

@Injectable()
export class DbService {
  blogs: Blog[];

  constructor() {
    this.blogs = [];
    this.blogs.push(new Blog('Title 1', 'Body 1'));
    this.blogs.push(new Blog('Title 2', 'Body 2'));

    this.blogs[0].comments = [ new Comment('comment 1'), new Comment('comment 2') ];
  }

  async getAllBlogs() {
    return this.blogs;
  }


  async getAllComments() {
    let comments = [];
    this.blogs.forEach(blog => {
      comments = comments.concat(blog.comments);
    });
    return comments;
  }

  async getBlogById(id: number) {
    // console.log(id, this.blogs);
    // console.log(this.blogs.find(b => b.id === id));
    return this.blogs.find(b => b.id === id);
  }

  async getCommentById(id: number) {
    return ( await this.getAllComments() ).find(c => c.id === id);
  }

  async addNewBlog(blog: Blog) {
    this.blogs.push(blog);
    return blog;
  }

  async updateBlog(blog: Blog) {
    // this.blogs = this.blogs.map(b => b.id === blog.id ? blog : b);
    this.blogs = this.blogs.map(b => (b.id === blog.id ? blog : b));
    return blog;
  }

  async deleteBlog(blog: Blog) {
    this.blogs = this.blogs.filter(b => b.id != blog.id);
    return blog;
  }

  async addNewComment(comment: Comment) {
    const blog = this.blogs.find(b => b.id === comment.blogPost.id);
    blog.comments = blog.comments.map(c => c.id === comment.id ? comment : c);

    return comment;
  }

  async deleteComment(comment: Comment) {
    const blog = this.blogs.find(b => b.id === comment.blogPost.id);
    blog.comments = blog.comments.filter(c => c.id !== comment.id);

    return comment;
  }
}
