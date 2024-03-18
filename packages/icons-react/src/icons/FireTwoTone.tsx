// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FireTwoToneSvg from '@ant-design/icons-svg/lib/asn/FireTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FireTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FireTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FireTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FireTwoTone';
}

export default RefIcon;