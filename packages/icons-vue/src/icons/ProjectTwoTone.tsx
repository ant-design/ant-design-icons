// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProjectTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProjectTwoTone: ProjectTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectTwoToneSvg}></AntdIcon>;
};

ProjectTwoTone.displayName = 'ProjectTwoTone';
ProjectTwoTone.inheritAttrs = false;
export default ProjectTwoTone;