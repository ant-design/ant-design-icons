// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SwapOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SwapOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SwapOutlined: SwapOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwapOutlinedSvg}></AntdIcon>;
};

SwapOutlined.displayName = 'SwapOutlined';
SwapOutlined.inheritAttrs = false;
export default SwapOutlined;