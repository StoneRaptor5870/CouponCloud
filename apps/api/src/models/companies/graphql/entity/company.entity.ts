import { ObjectType, Field } from '@nestjs/graphql'
import { Company as CompanyType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Company implements RestrictProperties<Company, CompanyType> {
  @Field({ nullable: true })
  description: string
  createdAt: Date
  updatedAt: Date
  id: string
  @Field({ nullable: true })
  displayName: string
}
