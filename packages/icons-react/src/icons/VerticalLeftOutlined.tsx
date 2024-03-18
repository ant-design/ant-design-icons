// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VerticalLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerticalLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerticalLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VerticalLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VerticalLeftOutlined';
}

export default RefIcon;