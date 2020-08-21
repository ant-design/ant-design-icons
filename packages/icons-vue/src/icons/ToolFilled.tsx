// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ToolFilledSvg from '@ant-design/icons-svg/lib/asn/ToolFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToolFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToolFilledSvg}></AntdIcon>;
};

ToolFilled.displayName = 'ToolFilled';
ToolFilled.inheritAttrs = false;
export default ToolFilled;