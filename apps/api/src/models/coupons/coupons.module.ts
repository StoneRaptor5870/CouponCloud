import { Module } from '@nestjs/common'
import { CouponsService } from './graphql/coupons.service'
import { CouponsResolver } from './graphql/coupons.resolver'
import { CouponsController } from './rest/coupons.controller'

@Module({
  providers: [CouponsResolver, CouponsService],
  exports: [CouponsService],
  controllers: [CouponsController],
})
export class CouponsModule {}
