import { $Enums, CouponHistory } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CouponHistoryEntity
  implements RestrictProperties<CouponHistoryEntity, CouponHistory>
{
  id: string
  couponId: string
  action: $Enums.CouponAction
  timestamp: Date
  performedBy: string
}
