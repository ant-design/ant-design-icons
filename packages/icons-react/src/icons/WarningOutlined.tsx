// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningOutlinedSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined';
import AntdIcon, { AntdIconProps, ForwardRefComponentBase } from '../components/AntdIcon';

const WarningOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WarningOutlinedSvg} />;

WarningOutlined.displayName = 'WarningOutlined';

const Comp: ForwardRefComponentBase<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WarningOutlined);
export default Comp;