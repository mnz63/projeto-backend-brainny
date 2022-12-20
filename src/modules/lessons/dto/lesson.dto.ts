import { ContentDTO } from './../../contents/dto/content.dto';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import BaseDTO from 'src/modules/bases/dto/base.dto';

@ObjectType('lesson')
@FilterableOffsetConnection('contents', () => ContentDTO, { nullable: true })
export default class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}
