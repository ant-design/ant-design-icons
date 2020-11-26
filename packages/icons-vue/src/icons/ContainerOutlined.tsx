// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ContainerOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ContainerOutlined: ContainerOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContainerOutlinedSvg}></AntdIcon>;
};

ContainerOutlined.displayName = 'ContainerOutlined';
ContainerOutlined.inheritAttrs = false;
export default ContainerOutlined;