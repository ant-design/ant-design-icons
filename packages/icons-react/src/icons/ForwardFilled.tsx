// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ForwardFilledSvg from '@ant-design/icons-svg/lib/asn/ForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForwardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ForwardFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ForwardFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForwardFilled';
}

export default RefIcon;