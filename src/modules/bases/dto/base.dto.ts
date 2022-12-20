import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export default class BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  createAt: Date;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  deletedAt: Date;
}
