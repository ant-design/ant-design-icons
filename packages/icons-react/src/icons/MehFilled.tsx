// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MehFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MehFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MehFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MehFilled';
}

export default RefIcon;