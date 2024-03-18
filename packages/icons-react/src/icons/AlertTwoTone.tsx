// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlertTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlertTwoTone';
}

export default RefIcon;