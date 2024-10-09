import { GetUserType, Role } from 'src/common/types'
import { ForbiddenException } from '@nestjs/common'

export const checkRowLevelPermission = (
  user: GetUserType,
  requestedId?: string | string[],
  roles: Role[] = ['admin'],
) => {
  if (!requestedId) return false

  if (user.roles?.some((role) => roles.includes(role))) {
    return true
  }

  const ids =
    typeof requestedId === 'string'
      ? [requestedId]
      : requestedId.filter(Boolean)

  if (!ids.includes(user.id)) {
    throw new ForbiddenException()
  }
}
