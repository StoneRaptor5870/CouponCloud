import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { CouponHistory } from '../entity/coupon-history.entity'

@InputType()
export class CreateCouponHistoryInput extends PickType(
  CouponHistory,
  ['action', 'performedBy', 'couponId'],
  InputType,
) {
  couponCode: string
  discount: number
  expiryDate: string
  companyId: string
}

// code, discount, expiryDate, company
