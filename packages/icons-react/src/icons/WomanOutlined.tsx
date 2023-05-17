// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WomanOutlinedSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WomanOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WomanOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WomanOutlined.displayName = 'WomanOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WomanOutlined);