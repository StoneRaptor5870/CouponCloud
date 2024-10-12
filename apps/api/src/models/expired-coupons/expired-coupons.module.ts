import { Module } from '@nestjs/common'
import { ExpiredCouponsService } from './graphql/expired-coupons.service'
import { ExpiredCouponsResolver } from './graphql/expired-coupons.resolver'
import { ExpiredCouponsController } from './rest/expired-coupons.controller'

@Module({
  providers: [ExpiredCouponsResolver, ExpiredCouponsService],
  exports: [ExpiredCouponsService],
  controllers: [ExpiredCouponsController],
})
export class ExpiredCouponsModule {}
