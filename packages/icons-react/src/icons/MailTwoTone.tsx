// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailTwoToneSvg from '@ant-design/icons-svg/lib/asn/MailTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MailTwoTone.displayName = 'MailTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailTwoTone);