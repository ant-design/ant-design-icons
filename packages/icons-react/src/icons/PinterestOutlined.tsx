// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PinterestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PinterestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinterestOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PinterestOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PinterestOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PinterestOutlined';
}

export default RefIcon;