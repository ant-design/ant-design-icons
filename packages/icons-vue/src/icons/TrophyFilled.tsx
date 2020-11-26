// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrophyFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrophyFilled: TrophyFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrophyFilledSvg}></AntdIcon>;
};

TrophyFilled.displayName = 'TrophyFilled';
TrophyFilled.inheritAttrs = false;
export default TrophyFilled;