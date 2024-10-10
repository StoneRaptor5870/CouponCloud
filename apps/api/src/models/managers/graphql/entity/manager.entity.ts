import { Field, ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Manager implements RestrictProperties<Manager,ManagerType> {
    @Field({ nullable: true })
    displayName: string
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    @Field({ nullable: true })
    companyId: string
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
