import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Coupon } from '../entity/coupon.entity'

@InputType()
export class CreateCouponInput extends OmitType(
  Coupon,
  ['createdAt', 'updatedAt', 'id'],
  InputType,
) {}
