// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QrcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrcodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QrcodeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  QrcodeOutlined.displayName = 'QrcodeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QrcodeOutlined);