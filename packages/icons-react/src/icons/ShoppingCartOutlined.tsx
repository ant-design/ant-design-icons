// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const ShoppingCartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingCartOutlinedSvg} />;

ShoppingCartOutlined.displayName = 'ShoppingCartOutlined';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingCartOutlined);
export default Comp;