// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WarningTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WarningTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WarningTwoTone';
}

export default RefIcon;