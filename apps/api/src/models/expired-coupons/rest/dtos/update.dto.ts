import { PartialType } from '@nestjs/swagger'
import { CreateExpiredCoupon } from './create.dto'
import { ExpiredCoupon } from '@prisma/client'

export class UpdateExpiredCoupon extends PartialType(CreateExpiredCoupon) {
  id: ExpiredCoupon['id']
}
