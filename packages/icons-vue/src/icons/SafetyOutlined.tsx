// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafetyOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafetyOutlined: SafetyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafetyOutlinedSvg}></AntdIcon>;
};

SafetyOutlined.displayName = 'SafetyOutlined';
SafetyOutlined.inheritAttrs = false;
export default SafetyOutlined;