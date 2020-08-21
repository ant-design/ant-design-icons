// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DesktopOutlinedSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DesktopOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesktopOutlinedSvg}></AntdIcon>;
};

DesktopOutlined.displayName = 'DesktopOutlined';
DesktopOutlined.inheritAttrs = false;
export default DesktopOutlined;