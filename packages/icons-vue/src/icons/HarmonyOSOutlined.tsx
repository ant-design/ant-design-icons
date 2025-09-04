// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HarmonyOSOutlinedSvg from '@ant-design/icons-svg/lib/asn/HarmonyOSOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HarmonyOSOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HarmonyOSOutlined: HarmonyOSOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HarmonyOSOutlinedSvg}></AntdIcon>;
};

HarmonyOSOutlined.displayName = 'HarmonyOSOutlined';
HarmonyOSOutlined.inheritAttrs = false;
export default HarmonyOSOutlined;