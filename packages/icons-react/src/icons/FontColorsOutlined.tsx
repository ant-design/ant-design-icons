// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FontColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontColorsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontColorsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FontColorsOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FontColorsOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FontColorsOutlined';
}

export default RefIcon;