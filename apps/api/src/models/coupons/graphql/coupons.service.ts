import { Injectable } from '@nestjs/common'
import { FindManyCouponArgs, FindUniqueCouponArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCouponInput } from './dtos/create-coupon.input'
import { UpdateCouponInput } from './dtos/update-coupon.input'

@Injectable()
export class CouponsService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    code,
    description,
    discount,
    expiryDate,
    status,
    managerId,
    companyId,
  }: CreateCouponInput) {
    const customer = await this.prisma.manager.findUnique({
      where: { userId: managerId },
    })

    if (!customer?.userId) {
      await this.prisma.customer.create({
        data: { userId: managerId },
      })
    }

    return this.prisma.coupon.create({
      data: {
        code,
        description,
        discount,
        expiryDate,
        status,
        companyId,
      },
    })
  }

  findAll(args: FindManyCouponArgs) {
    return this.prisma.coupon.findMany(args)
  }

  findOne(args: FindUniqueCouponArgs) {
    return this.prisma.coupon.findUnique(args)
  }

  update(updateCouponInput: UpdateCouponInput) {
    const { id, ...data } = updateCouponInput
    return this.prisma.coupon.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueCouponArgs) {
    return this.prisma.coupon.delete(args)
  }
}
