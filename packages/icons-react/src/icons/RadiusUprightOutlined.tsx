// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RadiusUprightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUprightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadiusUprightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RadiusUprightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RadiusUprightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RadiusUprightOutlined';
}

export default RefIcon;