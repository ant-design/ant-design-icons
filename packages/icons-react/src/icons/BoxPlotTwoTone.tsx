// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BoxPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxPlotTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoxPlotTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BoxPlotTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BoxPlotTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BoxPlotTwoTone';
}

export default RefIcon;