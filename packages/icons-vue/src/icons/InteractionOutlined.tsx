// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InteractionOutlinedSvg from '@ant-design/icons-svg/lib/asn/InteractionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InteractionOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InteractionOutlinedSvg}></AntdIcon>;
};

InteractionOutlined.displayName = 'InteractionOutlined';
InteractionOutlined.inheritAttrs = false;
export default InteractionOutlined;