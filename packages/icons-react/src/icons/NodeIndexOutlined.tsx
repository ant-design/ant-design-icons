// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NodeIndexOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeIndexOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeIndexOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodeIndexOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(NodeIndexOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NodeIndexOutlined';
}

export default RefIcon;