// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KeyOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(KeyOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'KeyOutlined';
}

export default RefIcon;