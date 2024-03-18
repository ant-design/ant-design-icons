// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PinterestFilledSvg from '@ant-design/icons-svg/lib/asn/PinterestFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinterestFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PinterestFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PinterestFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PinterestFilled';
}

export default RefIcon;