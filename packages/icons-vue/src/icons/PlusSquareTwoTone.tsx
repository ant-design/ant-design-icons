// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlusSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlusSquareTwoTone: PlusSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusSquareTwoToneSvg}></AntdIcon>;
};

PlusSquareTwoTone.displayName = 'PlusSquareTwoTone';
PlusSquareTwoTone.inheritAttrs = false;
export default PlusSquareTwoTone;