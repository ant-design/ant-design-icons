// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DingdingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DingdingOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DingdingOutlined.displayName = 'DingdingOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DingdingOutlined);