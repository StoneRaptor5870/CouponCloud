import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  StringFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class AdminWhereUniqueInput {
  id: string
}

@InputType()
export class AdminWhereInputStrict
  implements RestrictProperties<AdminWhereInputStrict, Prisma.AdminWhereInput>
{
  id: StringFilter
  userId: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter

  AND: AdminWhereInput[]
  OR: AdminWhereInput[]
  NOT: AdminWhereInput[]
}

@InputType()
export class AdminWhereInput extends PartialType(AdminWhereInputStrict) {}

@InputType()
export class AdminListRelationFilter {
  every?: AdminWhereInput
  some?: AdminWhereInput
  none?: AdminWhereInput
}

@InputType()
export class AdminRelationFilter {
  is?: AdminWhereInput
  isNot?: AdminWhereInput
}
