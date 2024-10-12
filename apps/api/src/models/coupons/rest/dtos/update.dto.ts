import { PartialType } from '@nestjs/swagger'
import { CreateCoupon } from './create.dto'
import { Coupon } from '@prisma/client'

export class UpdateCoupon extends PartialType(CreateCoupon) {
  id: Coupon['id']
}

