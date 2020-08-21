// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingFilledSvg}></AntdIcon>;
};

SettingFilled.displayName = 'SettingFilled';
SettingFilled.inheritAttrs = false;
export default SettingFilled;