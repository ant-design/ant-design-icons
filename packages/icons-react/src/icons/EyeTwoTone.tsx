// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EyeTwoTone';
}

export default RefIcon;