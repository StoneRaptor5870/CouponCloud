import { $Enums, Coupon } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CouponEntity implements RestrictProperties<CouponEntity, Coupon> {
    createdAt: Date
    updatedAt: Date
    id: string
    @IsOptional()
    description: string
    code: string
    discount: number
    expiryDate: Date
    status: $Enums.CouponStatus
    companyId: string
    @IsOptional()
    customerId: string

}

