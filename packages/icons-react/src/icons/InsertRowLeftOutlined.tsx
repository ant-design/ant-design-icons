// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsertRowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsertRowLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsertRowLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InsertRowLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InsertRowLeftOutlined';
}

export default RefIcon;