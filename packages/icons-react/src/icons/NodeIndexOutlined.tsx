// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NodeIndexOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeIndexOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeIndexOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodeIndexOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  NodeIndexOutlined.displayName = 'NodeIndexOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NodeIndexOutlined);