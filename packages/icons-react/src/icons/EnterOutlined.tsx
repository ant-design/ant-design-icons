// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EnterOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EnterOutlined.displayName = 'EnterOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EnterOutlined);