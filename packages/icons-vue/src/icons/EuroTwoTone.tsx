// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EuroTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EuroTwoTone: EuroTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EuroTwoToneSvg}></AntdIcon>;
};

EuroTwoTone.displayName = 'EuroTwoTone';
EuroTwoTone.inheritAttrs = false;
export default EuroTwoTone;