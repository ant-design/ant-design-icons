// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlertOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlertOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertOutlinedSvg}></AntdIcon>;
};

AlertOutlined.displayName = 'AlertOutlined';
AlertOutlined.inheritAttrs = false;
export default AlertOutlined;