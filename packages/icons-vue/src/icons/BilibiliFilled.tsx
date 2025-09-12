// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BilibiliFilledSvg from '@ant-design/icons-svg/lib/asn/BilibiliFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BilibiliFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BilibiliFilled: BilibiliFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BilibiliFilledSvg}></AntdIcon>;
};

BilibiliFilled.displayName = 'BilibiliFilled';
BilibiliFilled.inheritAttrs = false;
export default BilibiliFilled;