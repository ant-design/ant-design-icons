// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlignCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignCenterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignCenterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlignCenterOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlignCenterOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlignCenterOutlined';
}

export default RefIcon;