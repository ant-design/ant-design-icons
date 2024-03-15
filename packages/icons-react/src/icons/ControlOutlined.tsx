// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ControlOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ControlOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ControlOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ControlOutlined';
}

export default RefIcon;