import { CreateCouponHistoryInput } from './create-coupon-history.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { CouponHistory } from '@prisma/client'

@InputType()
export class UpdateCouponHistoryInput extends PartialType(
  CreateCouponHistoryInput,
) {
  id: CouponHistory['id']
}
