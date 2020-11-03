import { Injectable, NotFoundException } from '@nestjs/common';
import PrismaClient from '@prisma/client'
import { Blog } from './blog.entitiy';
import { Comment } from './comment.entity';

@Injectable()
const prisma = new PrismaClient();
export class DbService {
  blogs: Blog[];
  comments: Comment[];

  constructor() {
    this.blogs = [];
    this.blogs.push(new Blog('Title 1', 'Body 1'));
    this.blogs.push(new Blog('Title 2', 'Body 2'));

    this.blogs[0].comments = [ new Comment('comment 1'), new Comment('comment 2') ];

    this.comments = [];
    this.comments = this.blogs[0].comments;
    this.comments[0].blogPost = this.blogs[0];
  }

  async getAllBlogs() {
    return prisma.blogs.findMany();
  }


  async getAllComments() {
    let comments = [];
    this.blogs.forEach(blog => {
      comments = comments.concat(blog.comments);
    });
    return comments;
  }

  async getBlogById(id: number) {
    return this.blogs.find(b => b.id === id);
  }

  async getCommentById(id: number) {
    const allComments = await this.getAllComments();
    const foundComment = allComments.find(c => {
      return c && (parseInt(c.id) === id);
    });
    return foundComment
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
