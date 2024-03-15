// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BilibiliOutlinedSvg from '@ant-design/icons-svg/lib/asn/BilibiliOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilibiliOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BilibiliOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BilibiliOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BilibiliOutlined';
}

export default RefIcon;