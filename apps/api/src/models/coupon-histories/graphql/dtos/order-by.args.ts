import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CouponOrderByWithRelationInput } from 'src/models/coupons/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class CouponHistoryOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CouponHistoryOrderByWithRelationInputStrict,
      Prisma.CouponHistoryOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  couponId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  action: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  timestamp: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  performedBy: Prisma.SortOrder
  coupon: CouponOrderByWithRelationInput
  user: UserOrderByWithRelationInput
}

@InputType()
export class CouponHistoryOrderByWithRelationInput extends PartialType(
  CouponHistoryOrderByWithRelationInputStrict,
) {}

@InputType()
export class CouponHistoryOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
