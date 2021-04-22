// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTwoTone';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const MessageTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessageTwoToneSvg} />;

MessageTwoTone.displayName = 'MessageTwoTone';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageTwoTone);
export default Comp;