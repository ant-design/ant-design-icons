// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RotateRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RotateRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RotateRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RotateRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RotateRightOutlined';
}

export default RefIcon;