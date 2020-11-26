// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProjectOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProjectOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProjectOutlined: ProjectOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectOutlinedSvg}></AntdIcon>;
};

ProjectOutlined.displayName = 'ProjectOutlined';
ProjectOutlined.inheritAttrs = false;
export default ProjectOutlined;