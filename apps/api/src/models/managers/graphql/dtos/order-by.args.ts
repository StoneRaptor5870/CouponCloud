import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class ManagerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ManagerOrderByWithRelationInputStrict,
      Omit<Prisma.ManagerOrderByWithRelationInput, 'company'>
    >
{
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  userId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  // TODO IMPORT FROM COMPANY MODEL
  // company: Prisma.CompanyOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ManagerOrderByWithRelationInput extends PartialType(
  ManagerOrderByWithRelationInputStrict,
) {}

@InputType()
export class ManagerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
