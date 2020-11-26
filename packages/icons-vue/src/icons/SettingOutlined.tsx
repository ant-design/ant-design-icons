// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SettingOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SettingOutlined: SettingOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingOutlinedSvg}></AntdIcon>;
};

SettingOutlined.displayName = 'SettingOutlined';
SettingOutlined.inheritAttrs = false;
export default SettingOutlined;