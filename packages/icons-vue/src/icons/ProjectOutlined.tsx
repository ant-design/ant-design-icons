// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProjectOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectOutlinedSvg}></AntdIcon>;
};

ProjectOutlined.displayName = 'ProjectOutlined';
ProjectOutlined.inheritAttrs = false;
export default ProjectOutlined;