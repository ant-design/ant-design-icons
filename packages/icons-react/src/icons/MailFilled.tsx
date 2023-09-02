// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MailFilled.displayName = 'MailFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailFilled);