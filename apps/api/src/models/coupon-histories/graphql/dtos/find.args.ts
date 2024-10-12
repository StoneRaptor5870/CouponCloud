import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CouponHistoryOrderByWithRelationInput } from './order-by.args'
import {
  CouponHistoryWhereInput,
  CouponHistoryWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.CouponHistoryScalarFieldEnum, {
  name: 'CouponHistoryScalarFieldEnum',
})

@ArgsType()
class FindManyCouponHistoryArgsStrict
  implements
    RestrictProperties<
      FindManyCouponHistoryArgsStrict,
      Omit<Prisma.CouponHistoryFindManyArgs, 'include' | 'select'>
    >
{
  where: CouponHistoryWhereInput
  orderBy: CouponHistoryOrderByWithRelationInput[]
  cursor: CouponHistoryWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.CouponHistoryScalarFieldEnum])
  distinct: Prisma.CouponHistoryScalarFieldEnum[]
}

@ArgsType()
export class FindManyCouponHistoryArgs extends PartialType(
  FindManyCouponHistoryArgsStrict,
) {}

@ArgsType()
export class FindUniqueCouponHistoryArgs {
  where: CouponHistoryWhereUniqueInput
}
