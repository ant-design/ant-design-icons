// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GifOutlinedSvg from '@ant-design/icons-svg/lib/asn/GifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GifOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GifOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GifOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GifOutlined';
}

export default RefIcon;