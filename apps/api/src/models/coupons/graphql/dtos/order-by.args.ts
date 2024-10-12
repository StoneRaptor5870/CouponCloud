import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CompanyOrderByWithRelationInput } from 'src/models/companies/graphql/dtos/order-by.args'
import { CustomerOrderByWithRelationInput } from 'src/models/customers/graphql/dtos/order-by.args'

@InputType()
export class CouponOrderByWithRelationInputStrict
  implements RestrictProperties<CouponOrderByWithRelationInputStrict, Omit<Prisma.CouponOrderByWithRelationInput, 'reviews' | 'CouponHistory'>>
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  code: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  discount: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  expiryDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  customerId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  company: CompanyOrderByWithRelationInput
  customer: CustomerOrderByWithRelationInput
  // TODO
  // reviews: Prisma.ReviewOrderByRelationAggregateInput
  // CouponHistory: Prisma.CouponHistoryOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class CouponOrderByWithRelationInput extends PartialType(
  CouponOrderByWithRelationInputStrict,
) {}

@InputType()
export class CouponOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
