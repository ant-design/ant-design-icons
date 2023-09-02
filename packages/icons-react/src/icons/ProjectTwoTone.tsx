// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ProjectTwoTone.displayName = 'ProjectTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectTwoTone);