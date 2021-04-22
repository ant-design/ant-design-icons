// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContactsOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContactsOutlined';
import AntdIcon, { AntdIconProps, ForwardRefComponentBase } from '../components/AntdIcon';

const ContactsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContactsOutlinedSvg} />;

ContactsOutlined.displayName = 'ContactsOutlined';

const Comp: ForwardRefComponentBase<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ContactsOutlined);
export default Comp;