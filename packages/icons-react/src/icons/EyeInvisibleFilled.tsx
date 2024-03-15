// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeInvisibleFilledSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeInvisibleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeInvisibleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeInvisibleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EyeInvisibleFilled';
}

export default RefIcon;