import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class CouponHistoryQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CouponHistoryScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CouponHistoryScalarFieldEnum))
  searchBy?: string
}

