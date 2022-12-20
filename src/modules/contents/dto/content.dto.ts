import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import BaseEntity from 'src/modules/bases/entities/base.entity';
import LessonDTO from 'src/modules/lessons/dto/lesson.dto';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO)
export class ContentDTO extends BaseEntity {
  @FilterableField({ nullable: true })
  description: string;

  @FilterableField({ nullable: true })
  linkContent: string;
}
