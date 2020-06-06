import { Controller, Get, Param, Post, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from '../db/comment.entity';

@Controller('api/v1/comments')
export class CommentsController {
  constructor(private CommentsService: CommentsService) {}

  @Get()
  async getAllComments() {
    return this.CommentsService.findComments();
  }

  @Get(':id')
  async getCommentById(@Param('id', ParseIntPipe) commentId: number) {
    const x = await this.CommentsService.findCommentById(commentId);
    console.log(x);
    return x;
  }

  @Post()
  async addNewComment(@Body() comment: Comment) {
    return this.CommentsService.addComment(comment);
  }

  @Delete()
  async removeComment(@Body() comment: Comment) {
    return this.CommentsService.deleteComment(comment);
  }
}