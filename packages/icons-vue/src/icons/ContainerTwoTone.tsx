// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ContainerTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContainerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ContainerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ContainerTwoTone: ContainerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContainerTwoToneSvg}></AntdIcon>;
};

ContainerTwoTone.displayName = 'ContainerTwoTone';
ContainerTwoTone.inheritAttrs = false;
export default ContainerTwoTone;