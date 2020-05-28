import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { CommentsModule } from './comments/comments.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [BlogsModule, CommentsModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
