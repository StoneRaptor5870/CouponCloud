import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class CustomerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CustomerOrderByWithRelationInputStrict,
      Omit<Prisma.CustomerOrderByWithRelationInput, 'coupons' | 'reviews'>
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  userId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  // TODO
  // coupons: Prisma.CouponOrderByRelationAggregateInput
  // reviews: Prisma.ReviewOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
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
