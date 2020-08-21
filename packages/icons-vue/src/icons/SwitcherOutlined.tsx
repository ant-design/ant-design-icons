// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitcherOutlinedSvg}></AntdIcon>;
};

SwitcherOutlined.displayName = 'SwitcherOutlined';
SwitcherOutlined.inheritAttrs = false;
export default SwitcherOutlined;