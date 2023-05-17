// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExperimentFilledSvg from '@ant-design/icons-svg/lib/asn/ExperimentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExperimentFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExperimentFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ExperimentFilled.displayName = 'ExperimentFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExperimentFilled);