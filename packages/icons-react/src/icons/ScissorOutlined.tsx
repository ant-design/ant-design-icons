// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScissorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScissorOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ScissorOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ScissorOutlined';
}

export default RefIcon;