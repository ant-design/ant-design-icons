// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomeTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HomeTwoTone.displayName = 'HomeTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomeTwoTone);