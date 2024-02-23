// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OpenAIOutlinedSvg from '@ant-design/icons-svg/lib/asn/OpenAIOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenAIOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OpenAIOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  OpenAIOutlined.displayName = 'OpenAIOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OpenAIOutlined);