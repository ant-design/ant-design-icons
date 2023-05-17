// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloudTwoTone.displayName = 'CloudTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudTwoTone);