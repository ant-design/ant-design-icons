// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WhatsAppOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WhatsAppOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WhatsAppOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WhatsAppOutlined';
}

export default RefIcon;