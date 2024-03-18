// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UpCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UpCircleTwoTone';
}

export default RefIcon;