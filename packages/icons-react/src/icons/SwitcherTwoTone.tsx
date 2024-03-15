// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/asn/SwitcherTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwitcherTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SwitcherTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SwitcherTwoTone';
}

export default RefIcon;