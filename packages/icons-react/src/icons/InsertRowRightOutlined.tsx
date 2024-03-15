// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsertRowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsertRowRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsertRowRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InsertRowRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InsertRowRightOutlined';
}

export default RefIcon;