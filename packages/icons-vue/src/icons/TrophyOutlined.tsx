// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrophyOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrophyOutlined: TrophyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrophyOutlinedSvg}></AntdIcon>;
};

TrophyOutlined.displayName = 'TrophyOutlined';
TrophyOutlined.inheritAttrs = false;
export default TrophyOutlined;