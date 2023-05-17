// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ProjectFilled.displayName = 'ProjectFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectFilled);