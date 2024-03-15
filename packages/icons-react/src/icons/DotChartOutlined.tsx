// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DotChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DotChartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DotChartOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DotChartOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DotChartOutlined';
}

export default RefIcon;