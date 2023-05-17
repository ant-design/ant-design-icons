// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  QuestionOutlined.displayName = 'QuestionOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionOutlined);