// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  StarTwoTone.displayName = 'StarTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StarTwoTone);