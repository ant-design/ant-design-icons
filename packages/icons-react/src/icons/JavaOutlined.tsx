// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import JavaOutlinedSvg from '@ant-design/icons-svg/lib/asn/JavaOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const JavaOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={JavaOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(JavaOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'JavaOutlined';
}

export default RefIcon;