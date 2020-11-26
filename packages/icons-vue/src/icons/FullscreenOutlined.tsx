// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FullscreenOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FullscreenOutlined: FullscreenOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FullscreenOutlinedSvg}></AntdIcon>;
};

FullscreenOutlined.displayName = 'FullscreenOutlined';
FullscreenOutlined.inheritAttrs = false;
export default FullscreenOutlined;