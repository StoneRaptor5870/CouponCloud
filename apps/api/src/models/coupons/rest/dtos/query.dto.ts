import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class CouponQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CouponScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CouponScalarFieldEnum))
  searchBy?: string
}
