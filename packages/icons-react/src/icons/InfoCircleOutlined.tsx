// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InfoCircleOutlined.displayName = 'InfoCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoCircleOutlined);