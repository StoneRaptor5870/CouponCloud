import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  StringFilter,
  IntFilter,
  BoolFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { CouponRelationFilter } from 'src/models/coupons/graphql/dtos/where.args'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'

@InputType()
export class ReviewWhereUniqueInput {
  id: string
}

@InputType()
export class ReviewWhereInputStrict
  implements
    RestrictProperties<ReviewWhereInputStrict, Prisma.ReviewWhereInput>
{
  id: StringFilter
  rating: IntFilter
  comment: StringFilter
  flagged: BoolFilter
  customerId: StringFilter
  couponId: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  customer: CustomerRelationFilter
  coupon: CouponRelationFilter

  AND: ReviewWhereInput[]
  OR: ReviewWhereInput[]
  NOT: ReviewWhereInput[]
}

@InputType()
export class ReviewWhereInput extends PartialType(ReviewWhereInputStrict) {}

@InputType()
export class ReviewListRelationFilter {
  every?: ReviewWhereInput
  some?: ReviewWhereInput
  none?: ReviewWhereInput
}

@InputType()
export class ReviewRelationFilter {
  is?: ReviewWhereInput
  isNot?: ReviewWhereInput
}
