// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SubnodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SubnodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubnodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SubnodeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SubnodeOutlined.displayName = 'SubnodeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SubnodeOutlined);