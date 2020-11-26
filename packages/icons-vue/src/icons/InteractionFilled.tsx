// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InteractionFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InteractionFilled: InteractionFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InteractionFilledSvg}></AntdIcon>;
};

InteractionFilled.displayName = 'InteractionFilled';
InteractionFilled.inheritAttrs = false;
export default InteractionFilled;