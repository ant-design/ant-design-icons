// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PayCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PayCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PayCircleOutlined.displayName = 'PayCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PayCircleOutlined);