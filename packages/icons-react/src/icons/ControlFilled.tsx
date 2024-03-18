// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ControlFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ControlFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ControlFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ControlFilled';
}

export default RefIcon;