// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ColumnHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnHeightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ColumnHeightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ColumnHeightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ColumnHeightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ColumnHeightOutlined';
}

export default RefIcon;