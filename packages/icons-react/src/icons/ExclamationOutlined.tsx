// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExclamationOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExclamationOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ExclamationOutlined.displayName = 'ExclamationOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExclamationOutlined);