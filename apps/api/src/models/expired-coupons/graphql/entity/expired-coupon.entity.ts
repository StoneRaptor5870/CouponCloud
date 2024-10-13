import { ObjectType, Field } from '@nestjs/graphql'
import { ExpiredCoupon as ExpiredCouponType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class ExpiredCoupon
  implements RestrictProperties<ExpiredCoupon, ExpiredCouponType>
{
  @Field({ nullable: true })
  description: string
  id: string
  code: string
  discount: number
  expiryDate: Date
  companyId: string
  archivedAt: Date
}
