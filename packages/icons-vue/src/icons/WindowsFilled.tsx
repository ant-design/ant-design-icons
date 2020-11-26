// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindowsFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindowsFilled: WindowsFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindowsFilledSvg}></AntdIcon>;
};

WindowsFilled.displayName = 'WindowsFilled';
WindowsFilled.inheritAttrs = false;
export default WindowsFilled;