// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NodeCollapseOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeCollapseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeCollapseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodeCollapseOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  NodeCollapseOutlined.displayName = 'NodeCollapseOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NodeCollapseOutlined);