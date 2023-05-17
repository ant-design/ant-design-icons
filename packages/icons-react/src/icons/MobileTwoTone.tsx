// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MobileTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MobileTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MobileTwoTone.displayName = 'MobileTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MobileTwoTone);