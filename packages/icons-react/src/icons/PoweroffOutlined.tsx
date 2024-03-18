// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PoweroffOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoweroffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoweroffOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PoweroffOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PoweroffOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PoweroffOutlined';
}

export default RefIcon;