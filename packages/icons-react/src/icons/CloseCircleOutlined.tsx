// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloseCircleOutlined.displayName = 'CloseCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseCircleOutlined);