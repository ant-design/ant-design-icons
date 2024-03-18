// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PropertySafetyFilledSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PropertySafetyFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PropertySafetyFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PropertySafetyFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PropertySafetyFilled';
}

export default RefIcon;