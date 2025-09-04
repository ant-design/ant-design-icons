// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DockerOutlinedSvg from '@ant-design/icons-svg/lib/asn/DockerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DockerOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DockerOutlined: DockerOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DockerOutlinedSvg}></AntdIcon>;
};

DockerOutlined.displayName = 'DockerOutlined';
DockerOutlined.inheritAttrs = false;
export default DockerOutlined;