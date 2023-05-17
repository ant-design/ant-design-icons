// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafetyOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SafetyOutlined.displayName = 'SafetyOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SafetyOutlined);