// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RocketOutlinedSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RocketOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RocketOutlined.displayName = 'RocketOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RocketOutlined);