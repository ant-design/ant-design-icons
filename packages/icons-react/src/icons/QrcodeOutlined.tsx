// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QrcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrcodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QrcodeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(QrcodeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'QrcodeOutlined';
}

export default RefIcon;