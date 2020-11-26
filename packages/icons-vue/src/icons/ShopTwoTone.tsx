// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopTwoTone: ShopTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopTwoToneSvg}></AntdIcon>;
};

ShopTwoTone.displayName = 'ShopTwoTone';
ShopTwoTone.inheritAttrs = false;
export default ShopTwoTone;