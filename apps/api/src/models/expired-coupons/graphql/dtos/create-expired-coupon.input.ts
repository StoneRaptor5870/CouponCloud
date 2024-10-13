import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { ExpiredCoupon } from '../entity/expired-coupon.entity'

@InputType()
export class CreateExpiredCouponInput extends PickType(
  ExpiredCoupon,
  ['code', 'description', 'discount', 'expiryDate'],
  InputType,
) {}
