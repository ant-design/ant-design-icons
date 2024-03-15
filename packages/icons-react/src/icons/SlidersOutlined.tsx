// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlidersOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlidersOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SlidersOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlidersOutlined';
}

export default RefIcon;