import { InputType, PickType } from '@nestjs/graphql'
import { Company } from '../entity/company.entity'

@InputType()
export class CreateCompanyInput extends PickType(
  Company,
  ['description', 'displayName'],
  InputType,
) {
  managerId?: string
  managerName?: string
}
