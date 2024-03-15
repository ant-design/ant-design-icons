// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PicCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicCenterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PicCenterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PicCenterOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PicCenterOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PicCenterOutlined';
}

export default RefIcon;