import { Customer } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CustomerEntity implements RestrictProperties<CustomerEntity, Customer> {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
}

