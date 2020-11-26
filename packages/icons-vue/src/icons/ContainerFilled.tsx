// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ContainerFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ContainerFilled: ContainerFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContainerFilledSvg}></AntdIcon>;
};

ContainerFilled.displayName = 'ContainerFilled';
ContainerFilled.inheritAttrs = false;
export default ContainerFilled;