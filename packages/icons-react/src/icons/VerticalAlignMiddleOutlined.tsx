// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerticalAlignMiddleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerticalAlignMiddleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VerticalAlignMiddleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VerticalAlignMiddleOutlined';
}

export default RefIcon;