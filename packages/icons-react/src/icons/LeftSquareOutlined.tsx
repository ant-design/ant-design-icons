// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LeftSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LeftSquareOutlined';
}

export default RefIcon;