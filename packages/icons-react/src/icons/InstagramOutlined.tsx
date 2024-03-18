// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InstagramOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InstagramOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InstagramOutlined';
}

export default RefIcon;