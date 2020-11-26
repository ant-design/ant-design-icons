// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FastForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FastForwardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FastForwardOutlined: FastForwardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FastForwardOutlinedSvg}></AntdIcon>;
};

FastForwardOutlined.displayName = 'FastForwardOutlined';
FastForwardOutlined.inheritAttrs = false;
export default FastForwardOutlined;