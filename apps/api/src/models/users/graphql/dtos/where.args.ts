import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  StringFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { CouponHistoryListRelationFilter } from 'src/models/coupon-histories/graphql/dtos/where.args'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { ManagerRelationFilter } from 'src/models/managers/graphql/dtos/where.args'

@InputType()
export class UserWhereUniqueInput {
  id: string
}

@InputType()
export class UserWhereInputStrict
  implements
    RestrictProperties<
      UserWhereInputStrict,
      Omit<
        Prisma.UserWhereInput,
        | 'Credentials'
        | 'AuthProvider'
        | 'Admin'
        | 'image'
      >
    >
{
  CouponHistory: CouponHistoryListRelationFilter
  Manager: ManagerRelationFilter
  Customer: CustomerRelationFilter
  id: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  name: StringFilter

  AND: UserWhereInput[]
  OR: UserWhereInput[]
  NOT: UserWhereInput[]
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput
  isNot?: UserWhereInput
}
