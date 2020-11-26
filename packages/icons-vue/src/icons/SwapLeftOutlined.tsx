// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SwapLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SwapLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SwapLeftOutlined: SwapLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwapLeftOutlinedSvg}></AntdIcon>;
};

SwapLeftOutlined.displayName = 'SwapLeftOutlined';
SwapLeftOutlined.inheritAttrs = false;
export default SwapLeftOutlined;