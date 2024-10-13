import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'
import { $Enums, CouponHistory as CouponHistoryType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.CouponAction, {
  name: 'CouponAction',
})

@ObjectType()
export class CouponHistory
  implements RestrictProperties<CouponHistory, CouponHistoryType>
{
  id: string
  couponId: string
  @Field(() => $Enums.CouponAction)
  action: $Enums.CouponAction
  timestamp: Date
  performedBy: string
}
