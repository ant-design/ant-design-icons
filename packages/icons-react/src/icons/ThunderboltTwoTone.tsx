// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThunderboltTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ThunderboltTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ThunderboltTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ThunderboltTwoTone';
}

export default RefIcon;