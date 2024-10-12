import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ExpiredCouponOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ExpiredCouponOrderByWithRelationInputStrict,
      Prisma.ExpiredCouponOrderByWithRelationInput
    >
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
  companyId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  archivedAt: Prisma.SortOrder
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ExpiredCouponOrderByWithRelationInput extends PartialType(
  ExpiredCouponOrderByWithRelationInputStrict,
) {}

@InputType()
export class ExpiredCouponOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
