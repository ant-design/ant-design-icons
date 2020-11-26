// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BellTwoToneSvg from '@ant-design/icons-svg/lib/asn/BellTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BellTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BellTwoTone: BellTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellTwoToneSvg}></AntdIcon>;
};

BellTwoTone.displayName = 'BellTwoTone';
BellTwoTone.inheritAttrs = false;
export default BellTwoTone;