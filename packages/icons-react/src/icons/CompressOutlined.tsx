// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CompressOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompressOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompressOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompressOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CompressOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CompressOutlined';
}

export default RefIcon;