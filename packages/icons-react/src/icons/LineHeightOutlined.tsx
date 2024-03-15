// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LineHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineHeightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineHeightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LineHeightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LineHeightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LineHeightOutlined';
}

export default RefIcon;