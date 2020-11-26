// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RightSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RightSquareTwoTone: RightSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightSquareTwoToneSvg}></AntdIcon>;
};

RightSquareTwoTone.displayName = 'RightSquareTwoTone';
RightSquareTwoTone.inheritAttrs = false;
export default RightSquareTwoTone;