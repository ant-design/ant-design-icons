// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertFilledSvg}></AntdIcon>;
};

AlertFilled.displayName = 'AlertFilled';
AlertFilled.inheritAttrs = false;
export default AlertFilled;