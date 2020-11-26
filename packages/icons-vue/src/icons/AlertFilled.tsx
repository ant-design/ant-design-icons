// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlertFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlertFilled: AlertFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertFilledSvg}></AntdIcon>;
};

AlertFilled.displayName = 'AlertFilled';
AlertFilled.inheritAttrs = false;
export default AlertFilled;