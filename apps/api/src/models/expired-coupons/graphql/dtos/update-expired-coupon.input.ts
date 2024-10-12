import { CreateExpiredCouponInput } from './create-expired-coupon.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { ExpiredCoupon } from '@prisma/client'

@InputType()
export class UpdateExpiredCouponInput extends PartialType(
  CreateExpiredCouponInput,
) {
  id: ExpiredCoupon['id']
}
