import { Injectable } from '@nestjs/common'
import {
  FindManyExpiredCouponArgs,
  FindUniqueExpiredCouponArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateExpiredCouponInput } from './dtos/create-expired-coupon.input'
import { UpdateExpiredCouponInput } from './dtos/update-expired-coupon.input'

@Injectable()
export class ExpiredCouponsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createExpiredCouponInput: CreateExpiredCouponInput) {
    return this.prisma.expiredCoupon.create({
      data: createExpiredCouponInput,
    })
  }

  findAll(args: FindManyExpiredCouponArgs) {
    return this.prisma.expiredCoupon.findMany(args)
  }

  findOne(args: FindUniqueExpiredCouponArgs) {
    return this.prisma.expiredCoupon.findUnique(args)
  }

  update(updateExpiredCouponInput: UpdateExpiredCouponInput) {
    const { id, ...data } = updateExpiredCouponInput
    return this.prisma.expiredCoupon.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueExpiredCouponArgs) {
    return this.prisma.expiredCoupon.delete(args)
  }
}
