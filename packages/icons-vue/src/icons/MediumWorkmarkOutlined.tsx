// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MediumWorkmarkOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MediumWorkmarkOutlined: MediumWorkmarkOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MediumWorkmarkOutlinedSvg}></AntdIcon>;
};

MediumWorkmarkOutlined.displayName = 'MediumWorkmarkOutlined';
MediumWorkmarkOutlined.inheritAttrs = false;
export default MediumWorkmarkOutlined;