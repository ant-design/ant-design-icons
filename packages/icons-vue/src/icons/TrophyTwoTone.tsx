// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrophyTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrophyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrophyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrophyTwoTone: TrophyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrophyTwoToneSvg}></AntdIcon>;
};

TrophyTwoTone.displayName = 'TrophyTwoTone';
TrophyTwoTone.inheritAttrs = false;
export default TrophyTwoTone;