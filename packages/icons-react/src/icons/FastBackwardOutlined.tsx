// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FastBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastBackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FastBackwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FastBackwardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FastBackwardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FastBackwardOutlined';
}

export default RefIcon;