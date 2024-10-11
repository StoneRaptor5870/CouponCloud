import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter,RestrictProperties } from 'src/common/dtos/common.input'
import { ManagerListRelationFilter } from 'src/models/managers/graphql/dtos/where.args'

@InputType()
export class CompanyWhereUniqueInput {
  id: string
}

@InputType()
export class CompanyWhereInputStrict implements RestrictProperties<CompanyWhereInputStrict, Omit<Prisma.CompanyWhereInput, 'coupons'>> {
  id: StringFilter
  name: StringFilter
  displayName: StringFilter
  description: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  // TODO
  // coupons: Prisma.CouponListRelationFilter
  managers: ManagerListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CompanyWhereInput[]
  OR: CompanyWhereInput[]
  NOT: CompanyWhereInput[]
}

@InputType()
export class CompanyWhereInput extends PartialType(
  CompanyWhereInputStrict,
) {}

@InputType()
export class CompanyListRelationFilter {
  every?: CompanyWhereInput
  some?: CompanyWhereInput
  none?: CompanyWhereInput
}

@InputType()
export class CompanyRelationFilter {
  is?: CompanyWhereInput
  isNot?: CompanyWhereInput
}
