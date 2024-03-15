// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeInvisibleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeInvisibleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeInvisibleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EyeInvisibleOutlined';
}

export default RefIcon;