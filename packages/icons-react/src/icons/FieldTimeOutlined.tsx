// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldTimeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FieldTimeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FieldTimeOutlined.displayName = 'FieldTimeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FieldTimeOutlined);