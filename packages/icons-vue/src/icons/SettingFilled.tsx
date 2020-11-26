// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingFilled: SettingFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingFilledSvg}></AntdIcon>;
};

SettingFilled.displayName = 'SettingFilled';
SettingFilled.inheritAttrs = false;
export default SettingFilled;