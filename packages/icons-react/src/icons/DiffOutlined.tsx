// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiffOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiffOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiffOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DiffOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DiffOutlined';
}

export default RefIcon;