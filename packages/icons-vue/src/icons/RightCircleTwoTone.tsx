// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RightCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RightCircleTwoTone: RightCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightCircleTwoToneSvg}></AntdIcon>;
};

RightCircleTwoTone.displayName = 'RightCircleTwoTone';
RightCircleTwoTone.inheritAttrs = false;
export default RightCircleTwoTone;