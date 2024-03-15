// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ControlTwoToneSvg from '@ant-design/icons-svg/lib/asn/ControlTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ControlTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ControlTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ControlTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ControlTwoTone';
}

export default RefIcon;