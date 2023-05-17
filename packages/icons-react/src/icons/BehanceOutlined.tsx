// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BehanceOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BehanceOutlined.displayName = 'BehanceOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BehanceOutlined);