// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TeamOutlinedSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TeamOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TeamOutlined: TeamOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeamOutlinedSvg}></AntdIcon>;
};

TeamOutlined.displayName = 'TeamOutlined';
TeamOutlined.inheritAttrs = false;
export default TeamOutlined;