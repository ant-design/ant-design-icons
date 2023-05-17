// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QqOutlinedSvg from '@ant-design/icons-svg/lib/asn/QqOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QqOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QqOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  QqOutlined.displayName = 'QqOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QqOutlined);