import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CouponOrderByRelationAggregateInput } from 'src/models/coupons/graphql/dtos/order-by.args'
import { ReviewOrderByRelationAggregateInput } from 'src/models/reviews/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class CustomerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CustomerOrderByWithRelationInputStrict,
      Prisma.CustomerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  userId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  coupons: CouponOrderByRelationAggregateInput
  reviews: ReviewOrderByRelationAggregateInput
}

@InputType()
export class CustomerOrderByWithRelationInput extends PartialType(
  CustomerOrderByWithRelationInputStrict,
) {}

@InputType()
export class CustomerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
