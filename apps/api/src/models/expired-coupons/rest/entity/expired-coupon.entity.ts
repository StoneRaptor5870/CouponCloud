import { ExpiredCoupon } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ExpiredCouponEntity
  implements RestrictProperties<ExpiredCouponEntity, ExpiredCoupon>
{
  id: string
  code: string
  @IsOptional()
  description: string
  discount: number
  expiryDate: Date
  companyId: string
  archivedAt: Date
}
