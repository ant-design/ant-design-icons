// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RotateLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RotateLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RotateLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RotateLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RotateLeftOutlined';
}

export default RefIcon;