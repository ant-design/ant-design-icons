// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EuroOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EuroOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EuroOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EuroOutlined.displayName = 'EuroOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EuroOutlined);