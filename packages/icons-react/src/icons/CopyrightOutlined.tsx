// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyrightOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CopyrightOutlined.displayName = 'CopyrightOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyrightOutlined);