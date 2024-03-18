// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BaiduOutlinedSvg from '@ant-design/icons-svg/lib/asn/BaiduOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BaiduOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BaiduOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BaiduOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BaiduOutlined';
}

export default RefIcon;