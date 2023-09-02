// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FormOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FormOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FormOutlined.displayName = 'FormOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FormOutlined);