// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToTopOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToTopOutlined: ToTopOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToTopOutlinedSvg}></AntdIcon>;
};

ToTopOutlined.displayName = 'ToTopOutlined';
ToTopOutlined.inheritAttrs = false;
export default ToTopOutlined;