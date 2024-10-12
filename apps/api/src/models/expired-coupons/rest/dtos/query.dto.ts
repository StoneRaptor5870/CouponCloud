import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ExpiredCouponQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ExpiredCouponScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ExpiredCouponScalarFieldEnum))
  searchBy?: string
}
