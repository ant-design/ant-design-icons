// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/HolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HolderOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HolderOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HolderOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HolderOutlined';
}

export default RefIcon;