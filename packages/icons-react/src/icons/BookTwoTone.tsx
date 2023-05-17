// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BookTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BookTwoTone.displayName = 'BookTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookTwoTone);