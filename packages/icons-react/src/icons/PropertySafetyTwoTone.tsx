// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PropertySafetyTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PropertySafetyTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PropertySafetyTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PropertySafetyTwoTone';
}

export default RefIcon;