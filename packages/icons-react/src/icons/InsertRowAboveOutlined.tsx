// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsertRowAboveOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowAboveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsertRowAboveOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsertRowAboveOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InsertRowAboveOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InsertRowAboveOutlined';
}

export default RefIcon;