// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FastForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FastForwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FastForwardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FastForwardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FastForwardOutlined';
}

export default RefIcon;