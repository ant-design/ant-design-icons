// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BellTwoToneSvg from '@ant-design/icons-svg/lib/asn/BellTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BellTwoTone.displayName = 'BellTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellTwoTone);