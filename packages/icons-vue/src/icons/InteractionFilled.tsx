// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InteractionFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InteractionFilledSvg}></AntdIcon>;
};

InteractionFilled.displayName = 'InteractionFilled';
InteractionFilled.inheritAttrs = false;
export default InteractionFilled;