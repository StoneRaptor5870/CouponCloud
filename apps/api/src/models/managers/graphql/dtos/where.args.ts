import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  StringFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ManagerWhereUniqueInput {
  id: string
}

@InputType()
export class ManagerWhereInputStrict
  implements
    RestrictProperties<
      ManagerWhereInputStrict,
      Omit<Prisma.ManagerWhereInput, 'company'>
    >
{
  displayName: StringFilter
  id: StringFilter
  userId: StringFilter
  companyId: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  // TODO
  // company: (Prisma.Without<Prisma.CompanyRelationFilter, Prisma.CompanyWhereInput> & Prisma.CompanyWhereInput) | (Prisma.Without<Prisma.CompanyWhereInput, Prisma.CompanyRelationFilter> & Prisma.CompanyRelationFilter)
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ManagerWhereInput[]
  OR: ManagerWhereInput[]
  NOT: ManagerWhereInput[]
}

@InputType()
export class ManagerWhereInput extends PartialType(ManagerWhereInputStrict) {}

@InputType()
export class ManagerListRelationFilter {
  every?: ManagerWhereInput
  some?: ManagerWhereInput
  none?: ManagerWhereInput
}

@InputType()
export class ManagerRelationFilter {
  is?: ManagerWhereInput
  isNot?: ManagerWhereInput
}
