import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ExpiredCouponsService } from './expired-coupons.service'
import { ExpiredCoupon } from './entity/expired-coupon.entity'
import {
  FindManyExpiredCouponArgs,
  FindUniqueExpiredCouponArgs,
} from './dtos/find.args'
import { CreateExpiredCouponInput } from './dtos/create-expired-coupon.input'
import { UpdateExpiredCouponInput } from './dtos/update-expired-coupon.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => ExpiredCoupon)
export class ExpiredCouponsResolver {
  constructor(
    private readonly expiredCouponsService: ExpiredCouponsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => ExpiredCoupon)
  createExpiredCoupon(
    @Args('createExpiredCouponInput') args: CreateExpiredCouponInput,
    @GetUser() user: GetUserType,
  ) {
    // TODO
    // checkRowLevelPermission(user, args.id)
    // return this.expiredCouponsService.create(args)
  }

  @Query(() => [ExpiredCoupon], { name: 'expiredCoupons' })
  findAll(@Args() args: FindManyExpiredCouponArgs) {
    return this.expiredCouponsService.findAll(args)
  }

  @Query(() => ExpiredCoupon, { name: 'expiredCoupon' })
  findOne(@Args() args: FindUniqueExpiredCouponArgs) {
    return this.expiredCouponsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ExpiredCoupon)
  async updateExpiredCoupon(
    @Args('updateExpiredCouponInput') args: UpdateExpiredCouponInput,
    @GetUser() user: GetUserType,
  ) {
    const expiredCoupon = await this.prisma.expiredCoupon.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, expiredCoupon.id)
    return this.expiredCouponsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ExpiredCoupon)
  async removeExpiredCoupon(
    @Args() args: FindUniqueExpiredCouponArgs,
    @GetUser() user: GetUserType,
  ) {
    const expiredCoupon = await this.prisma.expiredCoupon.findUnique(args)
    checkRowLevelPermission(user, expiredCoupon.id)
    return this.expiredCouponsService.remove(args)
  }
}
