// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarTwoTone: DollarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarTwoToneSvg}></AntdIcon>;
};

DollarTwoTone.displayName = 'DollarTwoTone';
DollarTwoTone.inheritAttrs = false;
export default DollarTwoTone;