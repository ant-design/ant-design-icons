// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectTwoToneSvg}></AntdIcon>;
};

ProjectTwoTone.displayName = 'ProjectTwoTone';
ProjectTwoTone.inheritAttrs = false;
export default ProjectTwoTone;