// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GoldOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GoldOutlined: GoldOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoldOutlinedSvg}></AntdIcon>;
};

GoldOutlined.displayName = 'GoldOutlined';
GoldOutlined.inheritAttrs = false;
export default GoldOutlined;