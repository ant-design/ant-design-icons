// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoxPlotFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BoxPlotFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BoxPlotFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BoxPlotFilled';
}

export default RefIcon;