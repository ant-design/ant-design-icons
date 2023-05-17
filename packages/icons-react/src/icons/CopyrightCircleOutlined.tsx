// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyrightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyrightCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CopyrightCircleOutlined.displayName = 'CopyrightCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyrightCircleOutlined);