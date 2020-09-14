// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TeamOutlinedSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeamOutlinedSvg}></AntdIcon>;
};

TeamOutlined.displayName = 'TeamOutlined';
TeamOutlined.inheritAttrs = false;
export default TeamOutlined;