// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PoundCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PoundCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoundCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PoundCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PoundCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PoundCircleTwoTone';
}

export default RefIcon;