import { OmitType } from '@nestjs/swagger'
import { CouponHistoryEntity } from '../entity/coupon-history.entity'

export class CreateCouponHistory extends OmitType(CouponHistoryEntity, [
  'timestamp',
  'id',
]) {}
