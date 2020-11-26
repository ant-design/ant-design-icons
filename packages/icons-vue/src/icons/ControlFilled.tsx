// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ControlFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ControlFilled: ControlFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ControlFilledSvg}></AntdIcon>;
};

ControlFilled.displayName = 'ControlFilled';
ControlFilled.inheritAttrs = false;
export default ControlFilled;