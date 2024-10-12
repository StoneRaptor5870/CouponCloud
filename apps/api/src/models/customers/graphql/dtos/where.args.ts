import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  StringFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { CouponListRelationFilter } from 'src/models/coupons/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class CustomerWhereUniqueInput {
  id: string
}

@InputType()
export class CustomerWhereInputStrict
  implements
    RestrictProperties<
      CustomerWhereInputStrict,
      Omit<Prisma.CustomerWhereInput, 'reviews'>
    >
{
  id: StringFilter
  userId: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  // TODO
  coupons: CouponListRelationFilter
  // reviews: Prisma.ReviewListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CustomerWhereInput[]
  OR: CustomerWhereInput[]
  NOT: CustomerWhereInput[]
}

@InputType()
export class CustomerWhereInput extends PartialType(CustomerWhereInputStrict) {}

@InputType()
export class CustomerListRelationFilter {
  every?: CustomerWhereInput
  some?: CustomerWhereInput
  none?: CustomerWhereInput
}

@InputType()
export class CustomerRelationFilter {
  is?: CustomerWhereInput
  isNot?: CustomerWhereInput
}
