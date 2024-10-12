import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CouponHistoriesService } from './coupon-histories.service'
import { CouponHistory } from './entity/coupon-history.entity'
import { FindManyCouponHistoryArgs, FindUniqueCouponHistoryArgs } from './dtos/find.args'
import { CreateCouponHistoryInput } from './dtos/create-coupon-history.input'
import { UpdateCouponHistoryInput } from './dtos/update-coupon-history.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => CouponHistory)
export class CouponHistoriesResolver {
  constructor(private readonly couponHistoriesService: CouponHistoriesService,
    private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @Mutation(() => CouponHistory)
  createCouponHistory(@Args('createCouponHistoryInput') args: CreateCouponHistoryInput, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.id)
    return this.couponHistoriesService.create(args)
  }

  @Query(() => [CouponHistory], { name: 'couponHistories' })
  findAll(@Args() args: FindManyCouponHistoryArgs) {
    return this.couponHistoriesService.findAll(args)
  }

  @Query(() => CouponHistory, { name: 'couponHistory' })
  findOne(@Args() args: FindUniqueCouponHistoryArgs) {
    return this.couponHistoriesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => CouponHistory)
  async updateCouponHistory(@Args('updateCouponHistoryInput') args: UpdateCouponHistoryInput, @GetUser() user: GetUserType) {
    const couponHistory = await this.prisma.couponHistory.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, couponHistory.id)
    return this.couponHistoriesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => CouponHistory)
  async removeCouponHistory(@Args() args: FindUniqueCouponHistoryArgs, @GetUser() user: GetUserType) {
    const couponHistory = await this.prisma.couponHistory.findUnique(args)
    checkRowLevelPermission(user, couponHistory.id)
    return this.couponHistoriesService.remove(args)
  }
}
