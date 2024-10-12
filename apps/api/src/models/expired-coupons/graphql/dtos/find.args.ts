import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ExpiredCouponOrderByWithRelationInput } from './order-by.args'
import {
  ExpiredCouponWhereInput,
  ExpiredCouponWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ExpiredCouponScalarFieldEnum, {
  name: 'ExpiredCouponScalarFieldEnum',
})

@ArgsType()
class FindManyExpiredCouponArgsStrict
  implements
    RestrictProperties<
      FindManyExpiredCouponArgsStrict,
      Omit<Prisma.ExpiredCouponFindManyArgs, 'include' | 'select'>
    >
{
  where: ExpiredCouponWhereInput
  orderBy: ExpiredCouponOrderByWithRelationInput[]
  cursor: ExpiredCouponWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ExpiredCouponScalarFieldEnum])
  distinct: Prisma.ExpiredCouponScalarFieldEnum[]
}

@ArgsType()
export class FindManyExpiredCouponArgs extends PartialType(
  FindManyExpiredCouponArgsStrict,
) {}

@ArgsType()
export class FindUniqueExpiredCouponArgs {
  where: ExpiredCouponWhereUniqueInput
}
