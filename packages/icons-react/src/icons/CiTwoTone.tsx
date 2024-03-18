// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CiTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CiTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CiTwoTone';
}

export default RefIcon;