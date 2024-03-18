// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RadiusBottomrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadiusBottomrightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RadiusBottomrightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RadiusBottomrightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RadiusBottomrightOutlined';
}

export default RefIcon;