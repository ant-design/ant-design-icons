// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContactsTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ContactsTwoTone.displayName = 'ContactsTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ContactsTwoTone);