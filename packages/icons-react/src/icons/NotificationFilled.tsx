// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationFilledSvg from '@ant-design/icons-svg/lib/asn/NotificationFilled';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const NotificationFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationFilledSvg} />;

NotificationFilled.displayName = 'NotificationFilled';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationFilled);
export default Comp;