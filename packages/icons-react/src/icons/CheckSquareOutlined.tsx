// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckSquareOutlined';
}

export default RefIcon;