import { Content } from './../../contents/entities/content.entity';
import BaseEntity from 'src/modules/bases/entities/base.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;

  @OneToMany(() => Content, (contents) => contents.lesson)
  contents: Content[];
}
