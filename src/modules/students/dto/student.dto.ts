import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import BaseDTO from 'src/modules/bases/dto/base.dto';

@ObjectType('Student')
@FilterableOffsetConnection('students', () => StudentDTO, { nullable: true })
export class StudentDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
