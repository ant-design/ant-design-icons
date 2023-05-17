// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContactsFilledSvg from '@ant-design/icons-svg/lib/asn/ContactsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContactsFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ContactsFilled.displayName = 'ContactsFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ContactsFilled);