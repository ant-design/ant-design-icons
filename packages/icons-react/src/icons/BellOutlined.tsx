// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined';
import AntdIcon, { AntdIconProps, ForwardRefComponentBase } from '../components/AntdIcon';

const BellOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellOutlinedSvg} />;

BellOutlined.displayName = 'BellOutlined';

const Comp: ForwardRefComponentBase<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BellOutlined);
export default Comp;