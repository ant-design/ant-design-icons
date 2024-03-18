// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import XOutlinedSvg from '@ant-design/icons-svg/lib/asn/XOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={XOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(XOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'XOutlined';
}

export default RefIcon;