import { Manager } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManagerEntity implements RestrictProperties<ManagerEntity, Manager> {
    @IsOptional()
    displayName: string
    userId: string
    id: string
    createdAt: Date
    updatedAt: Date
    @IsOptional()
    companyId: string
}

