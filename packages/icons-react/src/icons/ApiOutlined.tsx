// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ApiOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApiOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ApiOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ApiOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ApiOutlined';
}

export default RefIcon;