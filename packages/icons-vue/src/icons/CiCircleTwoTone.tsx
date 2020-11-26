// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CiCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CiCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CiCircleTwoTone: CiCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiCircleTwoToneSvg}></AntdIcon>;
};

CiCircleTwoTone.displayName = 'CiCircleTwoTone';
CiCircleTwoTone.inheritAttrs = false;
export default CiCircleTwoTone;