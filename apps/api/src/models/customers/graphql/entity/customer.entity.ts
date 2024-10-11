import { ObjectType } from '@nestjs/graphql'
import { Customer as CustomerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Customer implements RestrictProperties<Customer,CustomerType> {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
