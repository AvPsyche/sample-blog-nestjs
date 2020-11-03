import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { CommentsModule } from './comments/comments.module';
import { DbModule } from './db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    BlogsModule,
    CommentsModule,
    DbModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dev',
      password: 'password',
      database: 'test-db',
      entities: ['./db/*.entity.ts']
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
