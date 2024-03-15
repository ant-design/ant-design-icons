// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GooglePlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/GooglePlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GooglePlusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GooglePlusOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GooglePlusOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GooglePlusOutlined';
}

export default RefIcon;