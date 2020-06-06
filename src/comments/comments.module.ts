import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [DbModule]
})
export class CommentsModule {}
