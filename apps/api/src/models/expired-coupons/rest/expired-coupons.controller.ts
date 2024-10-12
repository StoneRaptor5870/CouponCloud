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
import { CreateExpiredCoupon } from './dtos/create.dto'
import { ExpiredCouponQueryDto } from './dtos/query.dto'
import { UpdateExpiredCoupon } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ExpiredCouponEntity } from './entity/expired-coupon.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('expired-coupons')
@Controller('expired-coupons')
export class ExpiredCouponsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ExpiredCouponEntity })
  @Post()
  create(
    @Body() createExpiredCouponDto: CreateExpiredCoupon,
    @GetUser() user: GetUserType,
  ) {
    // checkRowLevelPermission(user, createExpiredCouponDto.id)
    return this.prisma.expiredCoupon.create({ data: createExpiredCouponDto })
  }

  @ApiOkResponse({ type: [ExpiredCouponEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ExpiredCouponQueryDto) {
    return this.prisma.expiredCoupon.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ExpiredCouponEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.expiredCoupon.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ExpiredCouponEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExpiredCouponDto: UpdateExpiredCoupon,
    @GetUser() user: GetUserType,
  ) {
    const expiredCoupon = await this.prisma.expiredCoupon.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, expiredCoupon.id)
    return this.prisma.expiredCoupon.update({
      where: { id },
      data: updateExpiredCouponDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const expiredCoupon = await this.prisma.expiredCoupon.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, expiredCoupon.id)
    return this.prisma.expiredCoupon.delete({ where: { id } })
  }
}
