// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectFilledSvg}></AntdIcon>;
};

ProjectFilled.displayName = 'ProjectFilled';
ProjectFilled.inheritAttrs = false;
export default ProjectFilled;