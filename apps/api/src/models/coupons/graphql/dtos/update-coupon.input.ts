import { CreateCouponInput } from './create-coupon.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Coupon } from '@prisma/client'

@InputType()
export class UpdateCouponInput extends PartialType(CreateCouponInput) {
  id: Coupon['id']
}
