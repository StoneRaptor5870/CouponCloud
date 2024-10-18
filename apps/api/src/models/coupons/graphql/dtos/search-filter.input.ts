import { InputType, ObjectType, PickType } from '@nestjs/graphql'
import { FindManyCouponArgs } from './find.args'

@InputType()
export class DateFilterInput {
  start: string
  end: string
}

@InputType()
export class CouponFilter extends PickType(
  FindManyCouponArgs,
  ['where', 'orderBy', 'skip', 'take'],
  InputType,
) {}
