import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { ExpiredCoupon } from '../entity/expired-coupon.entity'

@InputType()
export class CreateExpiredCouponInput extends OmitType(
  ExpiredCoupon,
  ['id'],
  InputType,
) {}
