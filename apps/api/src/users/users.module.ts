import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { Prismaservice } from 'src/util/prisma'

@Module({
  providers: [UsersResolver, UsersService, Prismaservice],
})
export class UsersModule {}
