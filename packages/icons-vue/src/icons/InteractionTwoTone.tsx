// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InteractionTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InteractionTwoTone: InteractionTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InteractionTwoToneSvg}></AntdIcon>;
};

InteractionTwoTone.displayName = 'InteractionTwoTone';
InteractionTwoTone.inheritAttrs = false;
export default InteractionTwoTone;