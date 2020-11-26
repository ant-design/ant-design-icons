// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlidersTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlidersTwoTone: SlidersTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlidersTwoToneSvg}></AntdIcon>;
};

SlidersTwoTone.displayName = 'SlidersTwoTone';
SlidersTwoTone.inheritAttrs = false;
export default SlidersTwoTone;