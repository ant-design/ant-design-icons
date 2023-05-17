// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CrownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CrownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CrownOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CrownOutlined.displayName = 'CrownOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CrownOutlined);