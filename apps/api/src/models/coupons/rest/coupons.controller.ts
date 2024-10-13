import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateCoupon } from './dtos/create.dto'
import { CouponQueryDto } from './dtos/query.dto'
import { UpdateCoupon } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { CouponEntity } from './entity/coupon.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('coupons')
@Controller('coupons')
export class CouponsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CouponEntity })
  @Post()
  create(@Body() createCouponDto: CreateCoupon, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createCouponDto.customerId)
    return this.prisma.coupon.create({ data: createCouponDto })
  }

  @ApiOkResponse({ type: [CouponEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: CouponQueryDto) {
    return this.prisma.coupon.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: CouponEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.coupon.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: CouponEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCouponDto: UpdateCoupon,
    @GetUser() user: GetUserType,
  ) {
    const coupon = await this.prisma.coupon.findUnique({ where: { id } })
    checkRowLevelPermission(user, coupon.id)
    return this.prisma.coupon.update({
      where: { id },
      data: updateCouponDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const coupon = await this.prisma.coupon.findUnique({ where: { id } })
    checkRowLevelPermission(user, coupon.id)
    return this.prisma.coupon.delete({ where: { id } })
  }
}
