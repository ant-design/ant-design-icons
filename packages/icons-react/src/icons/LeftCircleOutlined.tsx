// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LeftCircleOutlined';
}

export default RefIcon;