import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Coupon } from '../entity/coupon.entity'

@InputType()
export class CreateCouponInput extends PickType(
  Coupon,
  ['code', 'description', 'discount', 'expiryDate', 'status', 'companyId'],
  InputType,
) {
  managerId?: string
  managerName?: string
}
