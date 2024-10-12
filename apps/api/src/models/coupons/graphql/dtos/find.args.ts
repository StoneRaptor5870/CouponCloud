import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CouponOrderByWithRelationInput } from './order-by.args'
import { CouponWhereInput, CouponWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.CouponScalarFieldEnum, {
  name: 'CouponScalarFieldEnum',
})

@ArgsType()
class FindManyCouponArgsStrict
  implements RestrictProperties<FindManyCouponArgsStrict, Omit<Prisma.CouponFindManyArgs, 'include' | 'select'>>
{
  where: CouponWhereInput
  orderBy: CouponOrderByWithRelationInput[]
  cursor: CouponWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.CouponScalarFieldEnum])
  distinct: Prisma.CouponScalarFieldEnum[]
}

@ArgsType()
export class FindManyCouponArgs extends PartialType(
  FindManyCouponArgsStrict,
) {}

@ArgsType()
export class FindUniqueCouponArgs {
  where: CouponWhereUniqueInput
}