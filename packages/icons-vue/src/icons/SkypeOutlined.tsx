// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SkypeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SkypeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SkypeOutlined: SkypeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkypeOutlinedSvg}></AntdIcon>;
};

SkypeOutlined.displayName = 'SkypeOutlined';
SkypeOutlined.inheritAttrs = false;
export default SkypeOutlined;