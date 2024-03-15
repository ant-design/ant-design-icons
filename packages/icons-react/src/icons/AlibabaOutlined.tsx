// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlibabaOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlibabaOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlibabaOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlibabaOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlibabaOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlibabaOutlined';
}

export default RefIcon;