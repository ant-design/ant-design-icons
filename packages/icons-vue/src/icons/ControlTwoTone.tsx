// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ControlTwoToneSvg from '@ant-design/icons-svg/lib/asn/ControlTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ControlTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ControlTwoTone: ControlTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ControlTwoToneSvg}></AntdIcon>;
};

ControlTwoTone.displayName = 'ControlTwoTone';
ControlTwoTone.inheritAttrs = false;
export default ControlTwoTone;