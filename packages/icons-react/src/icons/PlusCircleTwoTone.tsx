// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusCircleTwoTone';
}

export default RefIcon;