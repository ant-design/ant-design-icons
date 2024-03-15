// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompassTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CompassTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CompassTwoTone';
}

export default RefIcon;