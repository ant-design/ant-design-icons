// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UndoOutlinedSvg from '@ant-design/icons-svg/lib/asn/UndoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UndoOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UndoOutlined: UndoOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoOutlinedSvg}></AntdIcon>;
};

UndoOutlined.displayName = 'UndoOutlined';
UndoOutlined.inheritAttrs = false;
export default UndoOutlined;