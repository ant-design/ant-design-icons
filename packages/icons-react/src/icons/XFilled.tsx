// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import XFilledSvg from '@ant-design/icons-svg/lib/asn/XFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={XFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(XFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'XFilled';
}

export default RefIcon;