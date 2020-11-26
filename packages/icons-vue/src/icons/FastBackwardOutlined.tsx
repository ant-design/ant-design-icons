// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FastBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastBackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FastBackwardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FastBackwardOutlined: FastBackwardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FastBackwardOutlinedSvg}></AntdIcon>;
};

FastBackwardOutlined.displayName = 'FastBackwardOutlined';
FastBackwardOutlined.inheritAttrs = false;
export default FastBackwardOutlined;