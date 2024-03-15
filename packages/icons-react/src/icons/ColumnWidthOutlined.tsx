// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ColumnWidthOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ColumnWidthOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ColumnWidthOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ColumnWidthOutlined';
}

export default RefIcon;