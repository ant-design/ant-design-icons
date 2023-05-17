// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MehFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MehFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MehFilled.displayName = 'MehFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MehFilled);