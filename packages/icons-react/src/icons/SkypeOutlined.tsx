// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkypeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkypeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SkypeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SkypeOutlined';
}

export default RefIcon;