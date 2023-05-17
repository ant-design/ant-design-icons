// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CopyTwoTone.displayName = 'CopyTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyTwoTone);