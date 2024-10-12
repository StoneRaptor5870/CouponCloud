import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { CouponHistory } from '../entity/coupon-history.entity'

@InputType()
export class CreateCouponHistoryInput extends OmitType(
  CouponHistory,
  ['timestamp'],
  InputType,
) {}
