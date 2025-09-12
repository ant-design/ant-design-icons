// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PinterestFilledSvg from '@ant-design/icons-svg/lib/asn/PinterestFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PinterestFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PinterestFilled: PinterestFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PinterestFilledSvg}></AntdIcon>;
};

PinterestFilled.displayName = 'PinterestFilled';
PinterestFilled.inheritAttrs = false;
export default PinterestFilled;