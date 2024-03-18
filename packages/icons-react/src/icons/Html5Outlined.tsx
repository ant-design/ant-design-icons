// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import Html5OutlinedSvg from '@ant-design/icons-svg/lib/asn/Html5Outlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Html5Outlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={Html5OutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(Html5Outlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'Html5Outlined';
}

export default RefIcon;