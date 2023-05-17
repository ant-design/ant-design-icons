// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MediumOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MediumOutlined.displayName = 'MediumOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MediumOutlined);