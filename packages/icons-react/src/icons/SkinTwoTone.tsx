// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkinTwoToneSvg from '@ant-design/icons-svg/lib/asn/SkinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkinTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SkinTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SkinTwoTone';
}

export default RefIcon;