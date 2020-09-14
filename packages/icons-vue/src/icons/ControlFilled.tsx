// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ControlFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ControlFilledSvg}></AntdIcon>;
};

ControlFilled.displayName = 'ControlFilled';
ControlFilled.inheritAttrs = false;
export default ControlFilled;