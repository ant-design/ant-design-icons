// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitlabFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GitlabFilled.displayName = 'GitlabFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GitlabFilled);