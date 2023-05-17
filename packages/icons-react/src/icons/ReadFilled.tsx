// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReadFilledSvg from '@ant-design/icons-svg/lib/asn/ReadFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReadFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReadFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ReadFilled.displayName = 'ReadFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ReadFilled);