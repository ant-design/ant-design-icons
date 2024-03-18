// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwitcherOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SwitcherOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SwitcherOutlined';
}

export default RefIcon;