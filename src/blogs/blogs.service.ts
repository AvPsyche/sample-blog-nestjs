import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateBlogDto } from './createBlog.dto';
import { Blog } from 'src/db/blog.entitiy';
import { UpdateBlogDto } from './updateBlog.dto';

@Injectable()
export class BlogsService {
  constructor(private dbService: DbService) {}

  async findAllBlogs() {
    return this.dbService.getAllBlogs();
  }

  async findNewBlog(id: number) {
    const blog = await this.dbService.getBlogById(id);

    if(!blog) {
      throw new NotFoundException(`Blog with id ${id} not found!`);
    }

    return blog;
  }

  async createNewBlog(blog: CreateBlogDto) {
    const newBlog = new Blog(blog.title, blog.body);

    return this.dbService.addNewBlog(newBlog);
  }

  async updateBlog(id: number, updateBlogDto: UpdateBlogDto) {
    console.log(id, updateBlogDto);
    
    const updateBlog = await this.findNewBlog(id);
    console.log(updateBlog);

    Object.assign(updateBlog, updateBlogDto);
    console.log('UPDATED BLOG', updateBlog);

    return this.dbService.updateBlog(updateBlog);
  }

  async deleteBlog(id: number) {
    const deleteBlog = await this.findNewBlog(id);

    return this.dbService.deleteBlog(deleteBlog);
  }
}
