// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProjectOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ProjectOutlined.displayName = 'ProjectOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectOutlined);