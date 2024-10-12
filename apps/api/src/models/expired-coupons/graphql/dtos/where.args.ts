import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  StringFilter,
  IntFilter,
  DateTimeFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'

@InputType()
export class ExpiredCouponWhereUniqueInput {
  id: string
}

@InputType()
export class ExpiredCouponWhereInputStrict
  implements
    RestrictProperties<
      ExpiredCouponWhereInputStrict,
      Prisma.ExpiredCouponWhereInput
    >
{
  id: StringFilter
  code: StringFilter
  description: StringFilter
  discount: IntFilter
  expiryDate: DateTimeFilter
  companyId: StringFilter
  archivedAt: DateTimeFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ExpiredCouponWhereInput[]
  OR: ExpiredCouponWhereInput[]
  NOT: ExpiredCouponWhereInput[]
}

@InputType()
export class ExpiredCouponWhereInput extends PartialType(
  ExpiredCouponWhereInputStrict,
) {}

@InputType()
export class ExpiredCouponListRelationFilter {
  every?: ExpiredCouponWhereInput
  some?: ExpiredCouponWhereInput
  none?: ExpiredCouponWhereInput
}

@InputType()
export class ExpiredCouponRelationFilter {
  is?: ExpiredCouponWhereInput
  isNot?: ExpiredCouponWhereInput
}
