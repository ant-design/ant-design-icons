// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HddFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HddFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HddFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HddFilled';
}

export default RefIcon;