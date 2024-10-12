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
import { CreateCouponHistory } from './dtos/create.dto'
import { CouponHistoryQueryDto } from './dtos/query.dto'
import { UpdateCouponHistory } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { CouponHistoryEntity } from './entity/coupon-history.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('coupon-histories')
@Controller('coupon-histories')
export class CouponHistoriesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CouponHistoryEntity })
  @Post()
  create(
    @Body() createCouponHistoryDto: CreateCouponHistory,
    @GetUser() user: GetUserType,
  ) {
    // checkRowLevelPermission(user, createCouponHistoryDto.id)
    return this.prisma.couponHistory.create({ data: createCouponHistoryDto })
  }

  @ApiOkResponse({ type: [CouponHistoryEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: CouponHistoryQueryDto) {
    return this.prisma.couponHistory.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: CouponHistoryEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.couponHistory.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: CouponHistoryEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCouponHistoryDto: UpdateCouponHistory,
    @GetUser() user: GetUserType,
  ) {
    const couponHistory = await this.prisma.couponHistory.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, couponHistory.id)
    return this.prisma.couponHistory.update({
      where: { id },
      data: updateCouponHistoryDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const couponHistory = await this.prisma.couponHistory.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, couponHistory.id)
    return this.prisma.couponHistory.delete({ where: { id } })
  }
}
