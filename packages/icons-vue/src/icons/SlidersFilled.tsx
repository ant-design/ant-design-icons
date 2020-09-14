// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlidersFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlidersFilledSvg}></AntdIcon>;
};

SlidersFilled.displayName = 'SlidersFilled';
SlidersFilled.inheritAttrs = false;
export default SlidersFilled;