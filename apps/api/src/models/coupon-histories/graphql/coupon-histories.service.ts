import { Injectable } from '@nestjs/common'
import {
  FindManyCouponHistoryArgs,
  FindUniqueCouponHistoryArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCouponHistoryInput } from './dtos/create-coupon-history.input'
import { UpdateCouponHistoryInput } from './dtos/update-coupon-history.input'

@Injectable()
export class CouponHistoriesService {
  constructor(private readonly prisma: PrismaService) {}
  create({
    action,
    performedBy,
    couponId,
    couponCode,
    expiryDate,
    companyId,
    discount,
  }: CreateCouponHistoryInput) {
    return this.prisma.couponHistory.create({
      data: {
        action,
        user: {
          create: {
            id: performedBy,
          },
        },
        coupon: {
          create: {
            id: couponId,
            code: couponCode,
            expiryDate,
            companyId,
            discount,
          },
        },
      },
    })
  }

  findAll(args: FindManyCouponHistoryArgs) {
    return this.prisma.couponHistory.findMany(args)
  }

  findOne(args: FindUniqueCouponHistoryArgs) {
    return this.prisma.couponHistory.findUnique(args)
  }

  update(updateCouponHistoryInput: UpdateCouponHistoryInput) {
    const { id, ...data } = updateCouponHistoryInput
    return this.prisma.couponHistory.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueCouponHistoryArgs) {
    return this.prisma.couponHistory.delete(args)
  }
}
