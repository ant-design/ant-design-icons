// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UpSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UpSquareOutlined';
}

export default RefIcon;