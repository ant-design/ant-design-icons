// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SubnodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SubnodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubnodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SubnodeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SubnodeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SubnodeOutlined';
}

export default RefIcon;