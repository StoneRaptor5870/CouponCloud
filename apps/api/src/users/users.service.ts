import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { Prismaservice } from 'src/util/prisma'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: Prismaservice) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput })
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
