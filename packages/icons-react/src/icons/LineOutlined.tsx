// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LineOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LineOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LineOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LineOutlined';
}

export default RefIcon;