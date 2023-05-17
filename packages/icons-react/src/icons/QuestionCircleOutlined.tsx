// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionCircleOutlined);