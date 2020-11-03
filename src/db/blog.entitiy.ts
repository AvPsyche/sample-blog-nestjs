import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinTable } from 'typeorm'
import { Comment } from "./comment.entity";

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @OneToMany(() => Comment, comment => comment.blogPost)
  comments: Comment[];
}
