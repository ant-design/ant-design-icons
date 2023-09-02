// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HistoryOutlinedSvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HistoryOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HistoryOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HistoryOutlined.displayName = 'HistoryOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HistoryOutlined);