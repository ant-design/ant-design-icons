// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExpandAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExpandAltOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExpandAltOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ExpandAltOutlined.displayName = 'ExpandAltOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExpandAltOutlined);