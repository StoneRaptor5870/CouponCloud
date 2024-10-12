import { ObjectType, Field } from '@nestjs/graphql'
import { Review as ReviewType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Review implements RestrictProperties<Review,ReviewType> {
    id: string
    customerId: string
    createdAt: Date
    updatedAt: Date
    rating: number
    @Field({ nullable: true })
    comment: string
    flagged: boolean
    couponId: string
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
