// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ControlOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ControlOutlinedSvg}></AntdIcon>;
};

ControlOutlined.displayName = 'ControlOutlined';
ControlOutlined.inheritAttrs = false;
export default ControlOutlined;