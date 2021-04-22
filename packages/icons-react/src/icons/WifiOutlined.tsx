// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WifiOutlinedSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined';
import AntdIcon, { AntdIconProps, ForwardRefComponentBase } from '../components/AntdIcon';

const WifiOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WifiOutlinedSvg} />;

WifiOutlined.displayName = 'WifiOutlined';

const Comp: ForwardRefComponentBase<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WifiOutlined);
export default Comp;