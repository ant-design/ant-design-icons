// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExperimentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExperimentOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExperimentOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ExperimentOutlined.displayName = 'ExperimentOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExperimentOutlined);