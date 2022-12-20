import { Lesson } from './../../lessons/entities/lesson.entity';
import BaseEntity from 'src/modules/bases/entities/base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Content extends BaseEntity {
  @Column()
  description: string;

  @Column({ nullable: true })
  linkContent: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;

  @Column({ nullable: true })
  lessonId: string;
}
