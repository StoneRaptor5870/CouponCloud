import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma, CouponStatus } from '@prisma/client'
import {
  StringFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { CouponHistoryListRelationFilter } from 'src/models/coupon-histories/graphql/dtos/where.args'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args'

@InputType()
export class CouponWhereUniqueInput {
  id: string
}

@InputType()
export class EnumCouponStatusFilter {
  @Field(() => $Enums.CouponStatus, { nullable: true })
  equals?: $Enums.CouponStatus;
  @Field(() => [$Enums.CouponStatus], { nullable: true })
  in?: $Enums.CouponStatus[]
  @Field(() => [$Enums.CouponStatus], { nullable: true })
  notIn?: $Enums.CouponStatus[]
  @Field(() => $Enums.CouponStatus, { nullable: true })
  not?: $Enums.CouponStatus
}

@InputType()
export class CouponWhereInputStrict
  implements
    RestrictProperties<CouponWhereInputStrict, Prisma.CouponWhereInput>
{
  id: StringFilter
  code: StringFilter
  description: StringFilter
  discount: IntFilter
  expiryDate: DateTimeFilter
  status: EnumCouponStatusFilter
  companyId: StringFilter
  customerId: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  company: CompanyRelationFilter
  customer: CustomerRelationFilter
  reviews: ReviewListRelationFilter
  CouponHistory: CouponHistoryListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CouponWhereInput[]
  OR: CouponWhereInput[]
  NOT: CouponWhereInput[]
}

@InputType()
export class CouponWhereInput extends PartialType(CouponWhereInputStrict) {}

@InputType()
export class CouponListRelationFilter {
  every?: CouponWhereInput
  some?: CouponWhereInput
  none?: CouponWhereInput
}

@InputType()
export class CouponRelationFilter {
  is?: CouponWhereInput
  isNot?: CouponWhereInput
}
