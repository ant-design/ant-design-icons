// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WhatsAppOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WhatsAppOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WhatsAppOutlined.displayName = 'WhatsAppOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WhatsAppOutlined);