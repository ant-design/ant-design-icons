// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PushpinTwoToneSvg from '@ant-design/icons-svg/lib/asn/PushpinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PushpinTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PushpinTwoTone: PushpinTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PushpinTwoToneSvg}></AntdIcon>;
};

PushpinTwoTone.displayName = 'PushpinTwoTone';
PushpinTwoTone.inheritAttrs = false;
export default PushpinTwoTone;