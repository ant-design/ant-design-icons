// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SolutionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SolutionOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SolutionOutlined.displayName = 'SolutionOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SolutionOutlined);