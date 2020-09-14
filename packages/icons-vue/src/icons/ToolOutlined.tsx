// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ToolOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToolOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToolOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToolOutlinedSvg}></AntdIcon>;
};

ToolOutlined.displayName = 'ToolOutlined';
ToolOutlined.inheritAttrs = false;
export default ToolOutlined;