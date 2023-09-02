// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IdcardOutlinedSvg from '@ant-design/icons-svg/lib/asn/IdcardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IdcardOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  IdcardOutlined.displayName = 'IdcardOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IdcardOutlined);