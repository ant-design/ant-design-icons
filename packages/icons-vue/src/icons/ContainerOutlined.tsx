// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContainerOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContainerOutlinedSvg}></AntdIcon>;
};

ContainerOutlined.displayName = 'ContainerOutlined';
ContainerOutlined.inheritAttrs = false;
export default ContainerOutlined;