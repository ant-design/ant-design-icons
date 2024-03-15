// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ProjectTwoTone';
}

export default RefIcon;