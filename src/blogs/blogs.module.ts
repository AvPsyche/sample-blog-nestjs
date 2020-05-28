import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { DbModule } from 'src/db/db.module';
import { BlogsController } from './blogs.controller';

@Module({
  providers: [ BlogsService ],
  imports: [ DbModule ],
  controllers: [BlogsController]
})
export class BlogsModule {}
