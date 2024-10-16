import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './common/prisma/prisma.module'
import { UsersModule } from './models/users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { AdminsModule } from './models/admins/admins.module'
import { ManagersModule } from './models/managers/managers.module'
import { CustomersModule } from './models/customers/customers.module'
import { CompaniesModule } from './models/companies/companies.module'
import { CouponsModule } from './models/coupons/coupons.module'
import { ReviewsModule } from './models/reviews/reviews.module'
import { ExpiredCouponsModule } from './models/expired-coupons/expired-coupons.module'
import { CouponHistoriesModule } from './models/coupon-histories/coupon-histories.module'

const MAX_AGE = 24 * 60 * 60
@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: MAX_AGE },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // buildSchemaOptions: {
      //   numberScalarMode: 'integer',
      // },
    }),
    PrismaModule,
    UsersModule,
    AdminsModule,
    ManagersModule,
    CustomersModule,
    CompaniesModule,
    CouponsModule,
    ReviewsModule,
    ExpiredCouponsModule,
    CouponHistoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
