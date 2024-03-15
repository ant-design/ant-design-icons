// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShareAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShareAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareAltOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShareAltOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShareAltOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ShareAltOutlined';
}

export default RefIcon;