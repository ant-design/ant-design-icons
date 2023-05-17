// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlackSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SlackSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlackSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SlackSquareFilled.displayName = 'SlackSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SlackSquareFilled);