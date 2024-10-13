import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CouponsService } from './coupons.service'
import { Coupon } from './entity/coupon.entity'
import { FindManyCouponArgs, FindUniqueCouponArgs } from './dtos/find.args'
import { CreateCouponInput } from './dtos/create-coupon.input'
import { UpdateCouponInput } from './dtos/update-coupon.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Coupon)
export class CouponsResolver {
  constructor(
    private readonly couponsService: CouponsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Coupon)
  createCoupon(
    @Args('createCouponInput') args: CreateCouponInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.customerId)
    return this.couponsService.create(args)
  }

  @Query(() => [Coupon], { name: 'coupons' })
  findAll(@Args() args: FindManyCouponArgs) {
    return this.couponsService.findAll(args)
  }

  @Query(() => Coupon, { name: 'coupon' })
  findOne(@Args() args: FindUniqueCouponArgs) {
    return this.couponsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Coupon)
  async updateCoupon(
    @Args('updateCouponInput') args: UpdateCouponInput,
    @GetUser() user: GetUserType,
  ) {
    const coupon = await this.prisma.coupon.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, coupon.customerId)
    return this.couponsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Coupon)
  async removeCoupon(
    @Args() args: FindUniqueCouponArgs,
    @GetUser() user: GetUserType,
  ) {
    const coupon = await this.prisma.coupon.findUnique(args)
    checkRowLevelPermission(user, coupon.customerId)
    return this.couponsService.remove(args)
  }
}
