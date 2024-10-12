import { OmitType } from '@nestjs/swagger'
import { CouponEntity } from '../entity/coupon.entity'

export class CreateCoupon extends OmitType(CouponEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
