import { Admin } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AdminEntity implements RestrictProperties<AdminEntity, Admin> {
  userId: string
  id: string
  createdAt: Date
  updatedAt: Date
}
