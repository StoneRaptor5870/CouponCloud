import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'
import { $Enums, Coupon as CouponType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.CouponStatus, {
    name: 'CouponStatus',
  })

@ObjectType()
export class Coupon implements RestrictProperties<Coupon,CouponType> {
    @Field({ nullable: true })
    description: string
    createdAt: Date
    updatedAt: Date
    id: string
    code: string
    discount: number
    expiryDate: Date
    @Field(() => $Enums.CouponStatus)
    status: $Enums.CouponStatus
    companyId: string
    @Field({ nullable: true })
    customerId: string
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
