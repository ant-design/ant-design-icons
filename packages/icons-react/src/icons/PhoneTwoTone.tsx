// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/PhoneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhoneTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PhoneTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PhoneTwoTone';
}

export default RefIcon;