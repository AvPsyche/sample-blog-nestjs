import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm'
import { Blog } from "./blog.entitiy";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Blog, blog => blog.comments)
  blogPost: Blog;
}
