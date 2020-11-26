// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlusCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlusCircleTwoTone: PlusCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusCircleTwoToneSvg}></AntdIcon>;
};

PlusCircleTwoTone.displayName = 'PlusCircleTwoTone';
PlusCircleTwoTone.inheritAttrs = false;
export default PlusCircleTwoTone;