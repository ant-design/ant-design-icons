// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowsFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindowsFilledSvg}></AntdIcon>;
};

WindowsFilled.displayName = 'WindowsFilled';
WindowsFilled.inheritAttrs = false;
export default WindowsFilled;