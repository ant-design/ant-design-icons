// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartTwoTone: HeartTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartTwoToneSvg}></AntdIcon>;
};

HeartTwoTone.displayName = 'HeartTwoTone';
HeartTwoTone.inheritAttrs = false;
export default HeartTwoTone;