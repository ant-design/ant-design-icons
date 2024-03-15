// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RadiusUpleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadiusUpleftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RadiusUpleftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RadiusUpleftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RadiusUpleftOutlined';
}

export default RefIcon;