// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ZoomInOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomInOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomInOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoomInOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoomInOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZoomInOutlined';
}

export default RefIcon;