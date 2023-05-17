// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BookOutlined.displayName = 'BookOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookOutlined);