// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SaveOutlinedSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SaveOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SaveOutlined.displayName = 'SaveOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SaveOutlined);