// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InteractionOutlinedSvg from '@ant-design/icons-svg/lib/asn/InteractionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InteractionOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InteractionOutlined: InteractionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InteractionOutlinedSvg}></AntdIcon>;
};

InteractionOutlined.displayName = 'InteractionOutlined';
InteractionOutlined.inheritAttrs = false;
export default InteractionOutlined;