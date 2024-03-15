// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayoutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LayoutTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LayoutTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LayoutTwoTone';
}

export default RefIcon;