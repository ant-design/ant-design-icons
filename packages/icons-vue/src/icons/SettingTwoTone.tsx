// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingTwoToneSvg from '@ant-design/icons-svg/lib/asn/SettingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingTwoTone: SettingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingTwoToneSvg}></AntdIcon>;
};

SettingTwoTone.displayName = 'SettingTwoTone';
SettingTwoTone.inheritAttrs = false;
export default SettingTwoTone;