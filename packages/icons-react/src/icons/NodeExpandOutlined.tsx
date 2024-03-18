// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NodeExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeExpandOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodeExpandOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(NodeExpandOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NodeExpandOutlined';
}

export default RefIcon;