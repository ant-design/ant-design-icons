// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContainerFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContainerFilledSvg}></AntdIcon>;
};

ContainerFilled.displayName = 'ContainerFilled';
ContainerFilled.inheritAttrs = false;
export default ContainerFilled;