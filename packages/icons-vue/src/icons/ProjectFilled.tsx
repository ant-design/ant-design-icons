// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProjectFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProjectFilled: ProjectFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectFilledSvg}></AntdIcon>;
};

ProjectFilled.displayName = 'ProjectFilled';
ProjectFilled.inheritAttrs = false;
export default ProjectFilled;