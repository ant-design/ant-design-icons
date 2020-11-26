// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BellFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BellFilled: BellFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellFilledSvg}></AntdIcon>;
};

BellFilled.displayName = 'BellFilled';
BellFilled.inheritAttrs = false;
export default BellFilled;