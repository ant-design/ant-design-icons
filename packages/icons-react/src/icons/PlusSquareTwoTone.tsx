// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusSquareTwoTone';
}

export default RefIcon;