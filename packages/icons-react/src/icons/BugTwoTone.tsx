// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BugTwoTone.displayName = 'BugTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BugTwoTone);