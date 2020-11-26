// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkedinOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkedinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkedinOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkedinOutlined: LinkedinOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkedinOutlinedSvg}></AntdIcon>;
};

LinkedinOutlined.displayName = 'LinkedinOutlined';
LinkedinOutlined.inheritAttrs = false;
export default LinkedinOutlined;