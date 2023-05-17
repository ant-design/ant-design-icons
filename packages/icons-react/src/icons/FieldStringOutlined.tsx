// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldStringOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FieldStringOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FieldStringOutlined.displayName = 'FieldStringOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FieldStringOutlined);