// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HddFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HddFilled: HddFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HddFilledSvg}></AntdIcon>;
};

HddFilled.displayName = 'HddFilled';
HddFilled.inheritAttrs = false;
export default HddFilled;