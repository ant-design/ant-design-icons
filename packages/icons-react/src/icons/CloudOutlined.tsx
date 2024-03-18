// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloudOutlined';
}

export default RefIcon;