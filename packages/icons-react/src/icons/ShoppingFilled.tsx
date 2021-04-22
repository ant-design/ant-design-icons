// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const ShoppingFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingFilledSvg} />;

ShoppingFilled.displayName = 'ShoppingFilled';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingFilled);
export default Comp;