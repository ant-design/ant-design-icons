// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerifiedOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerifiedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerifiedOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerifiedOutlined: VerifiedOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerifiedOutlinedSvg}></AntdIcon>;
};

VerifiedOutlined.displayName = 'VerifiedOutlined';
VerifiedOutlined.inheritAttrs = false;
export default VerifiedOutlined;