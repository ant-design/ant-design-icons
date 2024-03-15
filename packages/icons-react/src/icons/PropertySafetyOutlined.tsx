// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PropertySafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PropertySafetyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PropertySafetyOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PropertySafetyOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PropertySafetyOutlined';
}

export default RefIcon;