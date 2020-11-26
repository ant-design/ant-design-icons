// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToolTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToolTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToolTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToolTwoTone: ToolTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToolTwoToneSvg}></AntdIcon>;
};

ToolTwoTone.displayName = 'ToolTwoTone';
ToolTwoTone.inheritAttrs = false;
export default ToolTwoTone;