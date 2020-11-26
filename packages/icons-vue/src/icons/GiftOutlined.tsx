// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftOutlinedSvg from '@ant-design/icons-svg/lib/asn/GiftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftOutlined: GiftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftOutlinedSvg}></AntdIcon>;
};

GiftOutlined.displayName = 'GiftOutlined';
GiftOutlined.inheritAttrs = false;
export default GiftOutlined;