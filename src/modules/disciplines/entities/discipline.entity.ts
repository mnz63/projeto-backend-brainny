import { Student } from './../../students/entities/student.entity';
import BaseEntity from 'src/modules/bases/entities/base.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Discipline extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Student, (students) => students.disciplines)
  @JoinTable()
  students: Student[];
}
