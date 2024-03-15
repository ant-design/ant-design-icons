// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwitcherFilledSvg from '@ant-design/icons-svg/lib/asn/SwitcherFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwitcherFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SwitcherFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SwitcherFilled';
}

export default RefIcon;