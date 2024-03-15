// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DotNetOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotNetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DotNetOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DotNetOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DotNetOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DotNetOutlined';
}

export default RefIcon;