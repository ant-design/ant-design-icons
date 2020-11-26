// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlidersFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlidersFilled: SlidersFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlidersFilledSvg}></AntdIcon>;
};

SlidersFilled.displayName = 'SlidersFilled';
SlidersFilled.inheritAttrs = false;
export default SlidersFilled;