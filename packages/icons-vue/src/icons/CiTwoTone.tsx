// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CiTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CiTwoTone: CiTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiTwoToneSvg}></AntdIcon>;
};

CiTwoTone.displayName = 'CiTwoTone';
CiTwoTone.inheritAttrs = false;
export default CiTwoTone;