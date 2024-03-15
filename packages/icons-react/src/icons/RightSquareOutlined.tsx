// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RightSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RightSquareOutlined';
}

export default RefIcon;