// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SisternodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SisternodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SisternodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SisternodeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SisternodeOutlined.displayName = 'SisternodeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SisternodeOutlined);