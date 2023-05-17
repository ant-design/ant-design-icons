// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  QuestionCircleFilled.displayName = 'QuestionCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionCircleFilled);