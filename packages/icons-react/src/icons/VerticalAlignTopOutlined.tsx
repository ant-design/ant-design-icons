// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VerticalAlignTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerticalAlignTopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerticalAlignTopOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VerticalAlignTopOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VerticalAlignTopOutlined';
}

export default RefIcon;