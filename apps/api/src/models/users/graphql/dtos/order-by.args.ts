import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CouponHistoryOrderByRelationAggregateInput } from 'src/models/coupon-histories/graphql/dtos/order-by.args'
import { CustomerOrderByWithRelationInput } from 'src/models/customers/graphql/dtos/order-by.args'
import { ManagerOrderByWithRelationInput } from 'src/models/managers/graphql/dtos/order-by.args'

@InputType()
export class UserOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UserOrderByWithRelationInputStrict,
      Omit<
        Prisma.UserOrderByWithRelationInput,
        'Credentials' | 'AuthProvider' | 'Admin' | 'image'
      >
    >
{
  Manager: ManagerOrderByWithRelationInput
  Customer: CustomerOrderByWithRelationInput
  CouponHistory: CouponHistoryOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
