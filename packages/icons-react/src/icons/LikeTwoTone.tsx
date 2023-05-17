// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LikeTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LikeTwoTone.displayName = 'LikeTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LikeTwoTone);