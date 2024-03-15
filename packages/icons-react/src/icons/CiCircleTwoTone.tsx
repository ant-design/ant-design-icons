// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CiCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CiCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CiCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CiCircleTwoTone';
}

export default RefIcon;