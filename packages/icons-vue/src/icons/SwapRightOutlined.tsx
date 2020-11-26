// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SwapRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SwapRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SwapRightOutlined: SwapRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwapRightOutlinedSvg}></AntdIcon>;
};

SwapRightOutlined.displayName = 'SwapRightOutlined';
SwapRightOutlined.inheritAttrs = false;
export default SwapRightOutlined;