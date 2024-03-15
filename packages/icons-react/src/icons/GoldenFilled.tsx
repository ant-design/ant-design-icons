// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldenFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldenFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldenFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GoldenFilled';
}

export default RefIcon;