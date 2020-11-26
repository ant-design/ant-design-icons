// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayoutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayoutTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayoutTwoTone: LayoutTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutTwoToneSvg}></AntdIcon>;
};

LayoutTwoTone.displayName = 'LayoutTwoTone';
LayoutTwoTone.inheritAttrs = false;
export default LayoutTwoTone;