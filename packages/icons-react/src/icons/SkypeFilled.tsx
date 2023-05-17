// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkypeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SkypeFilled.displayName = 'SkypeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SkypeFilled);