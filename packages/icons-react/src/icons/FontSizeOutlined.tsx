// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FontSizeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontSizeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontSizeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FontSizeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FontSizeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FontSizeOutlined';
}

export default RefIcon;