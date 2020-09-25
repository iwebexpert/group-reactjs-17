import { rem } from 'polished';

const baseFont = '16px';

const indents = {
  i4: rem(4, baseFont),
  i8: rem(8, baseFont),
  i10: rem(10, baseFont),
  i12: rem(12, baseFont),
  i16: rem(16, baseFont),
  i20: rem(20, baseFont),
  i24: rem(24, baseFont),
  i32: rem(32, baseFont),
  i40: rem(40, baseFont),
  i48: rem(48, baseFont),
} as const;

export default indents;
