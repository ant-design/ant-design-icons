// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LeftCircleTwoTone';
}

export default RefIcon;