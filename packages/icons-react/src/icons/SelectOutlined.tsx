// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SelectOutlinedSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SelectOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SelectOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SelectOutlined.displayName = 'SelectOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SelectOutlined);