// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CiOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CiOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CiOutlined';
}

export default RefIcon;