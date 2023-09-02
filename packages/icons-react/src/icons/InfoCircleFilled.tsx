// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InfoCircleFilled.displayName = 'InfoCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoCircleFilled);