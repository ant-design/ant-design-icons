// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LayoutFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LayoutFilled.displayName = 'LayoutFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LayoutFilled);