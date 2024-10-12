import { Review } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ReviewEntity implements RestrictProperties<ReviewEntity, Review> {
  createdAt: Date
  updatedAt: Date
  id: string
  customerId: string
  rating: number
  @IsOptional()
  comment: string
  flagged: boolean
  couponId: string
}
