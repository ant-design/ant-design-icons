// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DoubleLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DoubleLeftOutlined';
}

export default RefIcon;