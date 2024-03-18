// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DoubleRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DoubleRightOutlined';
}

export default RefIcon;