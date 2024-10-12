import { PartialType } from '@nestjs/swagger'
import { CreateCouponHistory } from './create.dto'
import { CouponHistory } from '@prisma/client'

export class UpdateCouponHistory extends PartialType(CreateCouponHistory) {
  id: CouponHistory['id']
}
