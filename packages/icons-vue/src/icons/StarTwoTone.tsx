// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarTwoTone: StarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarTwoToneSvg}></AntdIcon>;
};

StarTwoTone.displayName = 'StarTwoTone';
StarTwoTone.inheritAttrs = false;
export default StarTwoTone;