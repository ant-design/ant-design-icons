// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApiTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ApiTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ApiTwoTone.displayName = 'ApiTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ApiTwoTone);