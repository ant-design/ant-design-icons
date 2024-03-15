// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DownSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DownSquareOutlined';
}

export default RefIcon;