// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ThunderboltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThunderboltOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ThunderboltOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ThunderboltOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ThunderboltOutlined';
}

export default RefIcon;