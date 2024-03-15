// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowsAltOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowsAltOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowsAltOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowsAltOutlined';
}

export default RefIcon;