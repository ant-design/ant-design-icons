// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonFilledSvg from '@ant-design/icons-svg/lib/asn/MoonFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonFilled: MoonFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonFilledSvg}></AntdIcon>;
};

MoonFilled.displayName = 'MoonFilled';
MoonFilled.inheritAttrs = false;
export default MoonFilled;