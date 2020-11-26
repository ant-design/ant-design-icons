// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LogoutOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LogoutOutlined: LogoutOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutOutlinedSvg}></AntdIcon>;
};

LogoutOutlined.displayName = 'LogoutOutlined';
LogoutOutlined.inheritAttrs = false;
export default LogoutOutlined;