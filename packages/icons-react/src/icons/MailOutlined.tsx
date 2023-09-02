// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailOutlinedSvg from '@ant-design/icons-svg/lib/asn/MailOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MailOutlined.displayName = 'MailOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailOutlined);