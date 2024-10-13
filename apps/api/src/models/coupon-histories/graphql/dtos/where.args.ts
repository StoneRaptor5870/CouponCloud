import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  StringFilter,
  DateTimeFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { CouponRelationFilter } from 'src/models/coupons/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class CouponHistoryWhereUniqueInput {
  id: string
}

@InputType()
export class EnumCouponActionFilter {
  @Field(() => $Enums.CouponAction, { nullable: true })
  equals?: $Enums.CouponAction;
  @Field(() => [$Enums.CouponAction], { nullable: true })
  in?: $Enums.CouponAction[]
  @Field(() => [$Enums.CouponAction], { nullable: true })
  notIn?: $Enums.CouponAction[]
  @Field(() => $Enums.CouponAction, { nullable: true })
  not?: $Enums.CouponAction
}

@InputType()
export class CouponHistoryWhereInputStrict
  implements
    RestrictProperties<
      CouponHistoryWhereInputStrict,
      Prisma.CouponHistoryWhereInput
    >
{
  id: StringFilter
  couponId: StringFilter
  action: EnumCouponActionFilter
  timestamp: DateTimeFilter
  performedBy: StringFilter
  coupon: CouponRelationFilter
  user: UserRelationFilter

  AND: CouponHistoryWhereInput[]
  OR: CouponHistoryWhereInput[]
  NOT: CouponHistoryWhereInput[]
}

@InputType()
export class CouponHistoryWhereInput extends PartialType(
  CouponHistoryWhereInputStrict,
) {}

@InputType()
export class CouponHistoryListRelationFilter {
  every?: CouponHistoryWhereInput
  some?: CouponHistoryWhereInput
  none?: CouponHistoryWhereInput
}

@InputType()
export class CouponHistoryRelationFilter {
  is?: CouponHistoryWhereInput
  isNot?: CouponHistoryWhereInput
}
