import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Delete } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { globalAgent } from 'http';
import { CreateBlogDto } from './createBlog.dto';
import { UpdateBlogDto } from './updateBlog.dto';

@Controller('api/v1/blogs')
export class BlogsController {
  constructor(private blogService: BlogsService) {}
  
  @Get()
  async getAllBlogs() {
    return this.blogService.findAllBlogs();
  }

  @Get(':id')
  async getBlogById(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.findNewBlog(id);
  }

  @Post()
  async createBlog(@Body() blog: CreateBlogDto) {
    return this.blogService.createNewBlog(blog);
  }

  @Put(':id')
  async updateBlog(@Param('id', ParseIntPipe) id: number, @Body() blog: UpdateBlogDto) {
    return this.blogService.updateBlog(id, blog);
  }

  @Delete(':id')
  async deleteBlog(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.deleteBlog(id);
  }
}
