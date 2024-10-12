import { Module } from '@nestjs/common'
import { CouponHistoriesService } from './graphql/coupon-histories.service'
import { CouponHistoriesResolver } from './graphql/coupon-histories.resolver'
import { CouponHistoriesController } from './rest/coupon-histories.controller'

@Module({
  providers: [CouponHistoriesResolver, CouponHistoriesService],
  exports: [CouponHistoriesService],
  controllers: [CouponHistoriesController],
})
export class CouponHistoriesModule {}
