import { OmitType } from '@nestjs/swagger'
import { ExpiredCouponEntity } from '../entity/expired-coupon.entity'

export class CreateExpiredCoupon extends OmitType(ExpiredCouponEntity, [
  'id',
]) {}
