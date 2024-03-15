// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerticalAlignBottomOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerticalAlignBottomOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VerticalAlignBottomOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VerticalAlignBottomOutlined';
}

export default RefIcon;