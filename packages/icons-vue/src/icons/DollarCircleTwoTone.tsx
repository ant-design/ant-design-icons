// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarCircleTwoTone: DollarCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarCircleTwoToneSvg}></AntdIcon>;
};

DollarCircleTwoTone.displayName = 'DollarCircleTwoTone';
DollarCircleTwoTone.inheritAttrs = false;
export default DollarCircleTwoTone;