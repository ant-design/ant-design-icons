// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingOutlinedSvg}></AntdIcon>;
};

SettingOutlined.displayName = 'SettingOutlined';
SettingOutlined.inheritAttrs = false;
export default SettingOutlined;