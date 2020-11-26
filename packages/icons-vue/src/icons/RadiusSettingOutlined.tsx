// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadiusSettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusSettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadiusSettingOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadiusSettingOutlined: RadiusSettingOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadiusSettingOutlinedSvg}></AntdIcon>;
};

RadiusSettingOutlined.displayName = 'RadiusSettingOutlined';
RadiusSettingOutlined.inheritAttrs = false;
export default RadiusSettingOutlined;