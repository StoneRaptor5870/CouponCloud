import { ObjectType } from '@nestjs/graphql'
import { Admin as AdminType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Admin implements RestrictProperties<Admin, AdminType> {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
