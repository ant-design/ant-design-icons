// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsertRowBelowOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowBelowOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsertRowBelowOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsertRowBelowOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InsertRowBelowOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InsertRowBelowOutlined';
}

export default RefIcon;