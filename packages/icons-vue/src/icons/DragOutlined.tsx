// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DragOutlinedSvg from '@ant-design/icons-svg/lib/asn/DragOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DragOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DragOutlined: DragOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DragOutlinedSvg}></AntdIcon>;
};

DragOutlined.displayName = 'DragOutlined';
DragOutlined.inheritAttrs = false;
export default DragOutlined;