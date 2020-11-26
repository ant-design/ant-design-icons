// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlertTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlertTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlertTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlertTwoTone: AlertTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertTwoToneSvg}></AntdIcon>;
};

AlertTwoTone.displayName = 'AlertTwoTone';
AlertTwoTone.inheritAttrs = false;
export default AlertTwoTone;