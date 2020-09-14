// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlertTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlertTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertTwoToneSvg}></AntdIcon>;
};

AlertTwoTone.displayName = 'AlertTwoTone';
AlertTwoTone.inheritAttrs = false;
export default AlertTwoTone;