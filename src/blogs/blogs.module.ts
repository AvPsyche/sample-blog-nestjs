import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { DbModule } from 'src/db/db.module';
import { BlogsController } from './blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Blog from '../db/blog.entitiy'

@Module({
  providers: [ BlogsService ],
  imports: [ DbModule, TypeOrmModule.forFeature(Blog) ],
  controllers: [BlogsController]
})
export class BlogsModule {}
