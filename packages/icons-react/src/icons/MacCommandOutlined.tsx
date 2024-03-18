// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MacCommandOutlinedSvg from '@ant-design/icons-svg/lib/asn/MacCommandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacCommandOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MacCommandOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MacCommandOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MacCommandOutlined';
}

export default RefIcon;