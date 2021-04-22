// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const AlertFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertFilledSvg} />;

AlertFilled.displayName = 'AlertFilled';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertFilled);
export default Comp;