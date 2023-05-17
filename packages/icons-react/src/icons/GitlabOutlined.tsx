// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitlabOutlinedSvg from '@ant-design/icons-svg/lib/asn/GitlabOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitlabOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GitlabOutlined.displayName = 'GitlabOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GitlabOutlined);