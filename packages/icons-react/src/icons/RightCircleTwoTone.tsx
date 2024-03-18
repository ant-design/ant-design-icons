// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RightCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RightCircleTwoTone';
}

export default RefIcon;