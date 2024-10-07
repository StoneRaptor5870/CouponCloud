import { Field, ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  uid: string
  craetedAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  name: string
}
