// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EuroCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EuroCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EuroCircleTwoTone: EuroCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EuroCircleTwoToneSvg}></AntdIcon>;
};

EuroCircleTwoTone.displayName = 'EuroCircleTwoTone';
EuroCircleTwoTone.inheritAttrs = false;
export default EuroCircleTwoTone;