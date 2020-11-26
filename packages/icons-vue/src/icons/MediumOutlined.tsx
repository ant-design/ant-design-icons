// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MediumOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MediumOutlined: MediumOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MediumOutlinedSvg}></AntdIcon>;
};

MediumOutlined.displayName = 'MediumOutlined';
MediumOutlined.inheritAttrs = false;
export default MediumOutlined;