// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeInvisibleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeInvisibleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeInvisibleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EyeInvisibleTwoTone';
}

export default RefIcon;