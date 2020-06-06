import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Comment } from 'src/db/comment.entity';

@Injectable()
export class CommentsService {
  constructor(private dbServices: DbService) {}

  async findComments() {
    return this.dbServices.getAllComments(); 
  }

  async findCommentById(id: number) {
    return this.dbServices.getCommentById(id);
  }

  async addComment(comment: Comment) {
    return this.dbServices.addNewComment(comment);
  }

  async deleteComment(comment: Comment) {
    return this.dbServices.deleteComment(comment);
  }
}